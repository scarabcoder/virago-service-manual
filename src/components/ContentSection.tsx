import {createStyles, Theme, Typography} from "@material-ui/core";
import React from "react";
import ContentSectionType from "../types/ContentSectionType";
import Divider from "@material-ui/core/Divider";
import cx from "classnames";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        "& ol": {
            paddingLeft: "24px"
        }
    }
}));

type ContentSectionProps = {
    section: ContentSectionType,
    sectionIndex?: number,
    depth: number,
    className?: string
};

type AlphabetSectionLetterProps = {
    letter: string
}

const useAlphabetSectionLetterStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        fontSize: "1.1rem",
        color: "#5a5a5a"
    }
}));

const AlphabetSectionLetter = ({letter}: AlphabetSectionLetterProps) => {
    const classes = useAlphabetSectionLetterStyles();

    return <span className={classes.root}>{letter + ". "}</span>
}

const ContentSection = ({section, sectionIndex, depth, className}: ContentSectionProps) => {
    const SectionContent = section.content;
    const variant = depth === 0 ? "h2" : "h3";
    const classes = useStyles();

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const sectionLetter = sectionIndex !== undefined ? alphabet[sectionIndex].toUpperCase() : "";

    return <div className={cx(className, classes.root)}>
        {section.title ?
            <Typography variant={variant}>
                {depth > 0 ? <AlphabetSectionLetter letter={sectionLetter}/> : null}
                {section.title}</Typography> : null
        }
        {depth === 0 ?
            <Divider sx={{mt: 1, mb: 1}}/>
            : null}
        {SectionContent ? SectionContent() : null}
        {section.children?.map((child, index) =>
            <ContentSection key={child.slug} section={child} sectionIndex={index} depth={depth + 1}/>
        )}
    </div>
}

export default ContentSection;