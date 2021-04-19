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
import SectionType from "./types/SectionType";
import theme from "./theme";
import {Helmet} from "react-helmet";
import { ThemeProvider } from '@material-ui/styles';

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
    const lastPage = pagesPath[pagesPath.length - 1];

    return (
        <>
            <Helmet>
                <title>Virago Service Manual - {lastPage!.title!}</title>
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
