import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {ServerStyleSheets} from "@material-ui/core/styles";
import cache from "./cache";
import createEmotionServer from "@emotion/server/create-instance";
import { render } from '@jaredpalmer/after';

const {extractCritical} = createEmotionServer(cache);

import App from './App';
import { CacheProvider } from '@emotion/react';

let assets: any;
const public_bucket_domain = process.env.PUBLIC_BUCKET_DOMAIN || '';
const public_bucket_url = public_bucket_domain ? `https://${public_bucket_domain}` : '';

const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const cssLinksFromAssets = (assets, entrypoint) => {
    return assets[entrypoint] ? assets[entrypoint].css ?
        assets[entrypoint].css.map(asset=>
            `<link rel="stylesheet" href="${public_bucket_url}${asset}">`
        ).join('') : '' : '';
};

const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') => {
    return assets[entrypoint] ? assets[entrypoint].js ?
        assets[entrypoint].js.map(asset=>
            `<script src="${public_bucket_url}${asset}"${extra}></script>`
        ).join('') : '' : '';
};

export const renderApp = (req: express.Request, res: express.Response) => {
    const context: any = {};
    const sheets = new ServerStyleSheets();
    const markup = renderToString(
        sheets.collect(
            <CacheProvider value={cache}>
                <StaticRouter context={context} location={req.url}>
                    <App/>
                </StaticRouter>
            </CacheProvider>
        )
    );

    if (context.url) {
        return {redirect: context.url};
    } else {
        const css = sheets.toString();
        const styles = extractCritical(markup);

        const html =
            // prettier-ignore
            `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style id="jss-server-side">${css} ${styles.css}</style>
        ${cssLinksFromAssets(assets, 'client')}
    </head>
    <body>
        <div id="root">${markup}</div>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
    </body>
  </html>`;

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
