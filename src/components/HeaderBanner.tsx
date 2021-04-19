import Typography from "@material-ui/core/Typography";
import React from "react";
import ContentSectionType from "../types/ContentSectionType";
import SectionType from "../types/SectionType";
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import {createStyles} from "@material-ui/core";
import cx from "classnames";

type HeaderBannerProps = {
    pagesPath?: (ContentSectionType | SectionType)[]
}

const useStyles = makeStyles(({palette, spacing}: Theme) => createStyles({
    headerBanner: {
        position: "relative",
        top: "6px"
    },
    breadcrumbs: {
        fontSize: "0.9rem",
        color: "#f1f0f0"
    }
}));

const HeaderBanner = ({pagesPath}: HeaderBannerProps) => {
    const classes = useStyles();
    const titledPages = pagesPath?.filter(page => page.title !== undefined);

    return <div style={{height: "100%"}}>
        <Typography
            variant={"h6"}
            component={"h1"}
            className={cx({[classes.headerBanner]: titledPages !== undefined})}
        >Virago Service Manual</Typography>
        {titledPages?.length > 0 ? <span className={classes.breadcrumbs}>{titledPages[titledPages.length - 1].title}</span> : null}
    </div>;
};

export default HeaderBanner;