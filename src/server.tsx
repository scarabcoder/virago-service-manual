import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {ServerStyleSheets} from "@material-ui/core/styles";
import cache from "./cache";
import createEmotionServer from "@emotion/server/create-instance";
import {Helmet} from "react-helmet";
import {minify} from "html-minifier";
import device from "device";
import mediaQuery from "css-mediaquery";

const {extractCritical} = createEmotionServer(cache);
import App from './App';
import {CacheProvider} from '@emotion/react';
import findPagesPath from "./util/findPagesPath";
import manual from "./content/manual";
import {isContentPage, isTopLevelSectionPage} from "./util";
import getFullPageUrl from "./util/getFullPageUrl";
import {ThemeProvider} from '@material-ui/styles';
import deviceTypeToWidth from "./util/deviceTypeToWidth";

let assets: any;
const public_bucket_domain = process.env.PUBLIC_BUCKET_DOMAIN || '';
const public_bucket_url = public_bucket_domain ? `https://${public_bucket_domain}` : '';

const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const cssLinksFromAssets = (assets, entrypoint) => {
    return assets[entrypoint] ? assets[entrypoint].css ?
        assets[entrypoint].css.map(asset =>
            `<link rel="stylesheet" href="${public_bucket_url}${asset}">`
        ).join('') : '' : '';
};

const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') => {
    return assets[entrypoint] ? assets[entrypoint].js ?
        assets[entrypoint].js.map(asset =>
            `<script src="${public_bucket_url}${asset}"${extra}></script>`
        ).join('') : '' : '';
};

const defaultUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.163 Mobile/15E148 Safari/604.1";

export const renderApp = (req: express.Request, res: express.Response) => {
    const userDevice = device(req.header("User-Agent") || defaultUserAgent, {parseUserAgent: true});
    const path = req.path.split("/").filter(slug => slug !== "");
    if (path.length > 0) {
        const {pages, fullMatch} = findPagesPath(path, manual);
        if (!fullMatch) {
            res.status(404);
        } else {
            const lastPage = pages[pages.length - 1];
            if (!isContentPage(lastPage)) {
                return {
                    redirect: getFullPageUrl([...pages, lastPage.children[0]], process.env.APP_DOMAIN)
                };
            }
        }
    }

    const context: any = {};
    const sheets = new ServerStyleSheets();
    const markup = renderToString(
        sheets.collect(
            <CacheProvider value={cache}>
                <StaticRouter context={context} location={req.url}>
                    <App appDomain={process.env.APP_DOMAIN} analyticsTrackingId={process.env.GOOGLE_ANALYTICS_ID}/>
                </StaticRouter>
            </CacheProvider>
        )
    );

    const helmet = Helmet.renderStatic();
    console.log(process.env.GOOGLE_ANALYTICS_ID);

    if (context.url) {
        return {redirect: context.url};
    } else {
        const css = sheets.toString();
        const styles = extractCritical(markup);

        const html =
            // prettier-ignore
            minify(`<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style id="jss-server-side">${css} ${styles.css}</style>
        <script>
            window.appDomain = "${process.env.APP_DOMAIN}";
            window.gaTrackingId = "${process.env.GOOGLE_ANALYTICS_ID}";
        </script>
        ${cssLinksFromAssets(assets, 'client')}
    </head>
    <body>
        <div id="root">${markup}</div>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
    </body>
  </html>`, {
                collapseWhitespace: true,
                minifyCSS: true
            });

        return {html};
    }
};

const server = express()
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
    .get('/*', (req: express.Request, res: express.Response) => {
        const {html = '', redirect = false} = renderApp(req, res);
        if (redirect) {
            res.redirect(redirect);
        } else {
            res.send(html);
        }
    });

export default server;
