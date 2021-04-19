import React, {useEffect, useState} from 'react';
import './App.css';
import {CssBaseline} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {useLocation} from "react-router";
import manual from "./content/manual";
import AppDrawer from "./components/AppDrawer";
import HeaderBanner from "./components/HeaderBanner";
import Section from "./components/Section";
import Box from "@material-ui/core/Box";
import findPagesPath from "./util/findPagesPath";
import ContentSectionType from "./types/ContentSectionType";
import theme from "./theme";
import {Helmet} from "react-helmet";
import {ThemeProvider} from '@material-ui/styles';
import getFullPageUrl from "./util/getFullPageUrl";
import HomeContent from "./HomeContent";

type AppProps = {
    appDomain: string
}

function App({appDomain}: AppProps) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {pathname} = useLocation();
    const paths = pathname.split("/").filter(pathname => pathname !== "");
    useEffect(() => {
        setDrawerOpen(false);
    }, [pathname]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const {pages: pagesPath, fullMatch} = findPagesPath(paths, manual);
    const lastIndex = pagesPath.findIndex((page: ContentSectionType) => page.content !== undefined);
    const canonicalIndex = ((lastIndex === -1 ? null : lastIndex) || pagesPath.length) - 1;
    const canonical = pagesPath.length > 0 ? pagesPath[canonicalIndex] : null;
    const pagesToCanonical = pagesPath.filter((page, index) => index <= canonicalIndex);
    console.log("Pages to canonical: ", pagesToCanonical);
    console.log("pages", pagesPath);
    console.log("Canonical", canonical);
    console.log("Host: ", appDomain);
    console.log("Full page", getFullPageUrl(pagesToCanonical, appDomain));
    console.log("Full match:", fullMatch);
    console.log("Paths:", paths);

    return (
        <>
            <Helmet>
                <title>Virago Service Manual {canonical ? (" - " + canonical.title) : ""}</title>
                <link rel={"canonical"} href={getFullPageUrl(pagesToCanonical, appDomain)}/>
            </Helmet>
            <CssBaseline/>
            <React.StrictMode>
                <ThemeProvider theme={theme}>
                    <AppBar>
                        <Toolbar>
                            <IconButton edge="start" onClick={() => setDrawerOpen(true)}>
                                <MenuIcon/>
                            </IconButton>
                            <HeaderBanner pagesPath={pagesPath}/>
                        </Toolbar>
                    </AppBar>
                    <Toolbar/>
                    <Box p={1.5} boxSizing={"border-box"}>
                        {pagesPath.length > 0 ?
                            <Section sections={manual} path={paths}/>
                            : <HomeContent/>
                        }
                    </Box>
                    <AppDrawer
                        open={drawerOpen}
                        setDrawerOpen={setDrawerOpen}
                        pages={manual}
                        paths={paths}
                    />
                </ThemeProvider>
            </React.StrictMode>
        </>
    );
}

export default App;
