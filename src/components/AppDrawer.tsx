import Box from "@material-ui/core/Box";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {createStyles, List, Theme} from "@material-ui/core";
import HeaderBanner from "./HeaderBanner";
import Divider from "@material-ui/core/Divider";
import SectionNavigationItem from "./SectionNavigationItem";
import ContentSectionType from "../types/ContentSectionType";

type AppDrawerType = {
    open: boolean;
    setDrawerOpen: (open: boolean) => void;
    pages: ContentSectionType[],
    paths: string[]
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: "85vw"
    },
    chapterListItem: {
        "& > .MuiTypography-root": {
            fontWeight: 500
        }
    }
}));

const AppDrawer = ({open, setDrawerOpen, pages, paths}: AppDrawerType) => {
    const classes = useStyles();

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const currentPath = paths[0];

    return <SwipeableDrawer
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
        open={open}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        keepMounted={true}
    >
        <Box className={classes.root}>
            <Box p={2}>
                <HeaderBanner/>
            </Box>
            <Box m={1}>
                <Divider/>
            </Box>
            <List dense>
                {pages.map((page: ContentSectionType) => {
                    return <SectionNavigationItem
                        section={page}
                        parentSlug={"/"}
                        key={page.slug}
                        onClick={() => setDrawerOpen(false)}
                        currentPath={currentPath === page.slug ? [...paths] : []}
                        depth={0}
                    />
                })}
            </List>
        </Box>
    </SwipeableDrawer>
}

export default AppDrawer;