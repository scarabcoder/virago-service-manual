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
import { ThemeProvider } from '@material-ui/styles';
import getFullPageUrl from "./util/getFullPageUrl";

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {pathname} = useLocation();
    const paths = pathname.split("/").filter(pathname => pathname !== "");
    useEffect(() => {
        setDrawerOpen(false);
    }, [pathname]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const pagesPath = findPagesPath(paths, manual, []);
    const lastIndex = pagesPath.findIndex((page: ContentSectionType) => page.content !== undefined);
    const canonicalIndex = ((lastIndex === -1 ? null : lastIndex) || pagesPath.length) - 1;
    const canonical = pagesPath[canonicalIndex];
    const pagesToCanonical = pagesPath.filter((page, index) => index <= canonicalIndex);
    console.log("Pages to canonical: ", pagesToCanonical);
    console.log("canonicalIndex", canonicalIndex);
    console.log("Canonical", canonical);
    console.log("Host: ", process.env.APP_DOMAIN);
    console.log("Full page", getFullPageUrl(pagesToCanonical));

    return (
        <>
            <Helmet>
                <title>Virago Service Manual - {canonical.title!}</title>
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
                        <Section sections={manual} path={paths}/>
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
