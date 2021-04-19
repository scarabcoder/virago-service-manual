import SectionType from "../types/SectionType";
import {isTopLevelSectionPage, trailingSlashIt} from "../util";
import RouterLinkListItem from "./RouterLinkListItem";
import React, {useEffect, useState} from "react";
import {createStyles, ListItemText, Theme} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from '@material-ui/core/styles';
import Collapse from "@material-ui/core/Collapse";
import ContentSectionType from "../types/ContentSectionType";

type SectionNavigationItemProps = {
    section: SectionType | ContentSectionType,
    parentSlug: string,
    onClick?: () => void,
    currentPath: string[],
    depth: number
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        "& > .MuiTypography-root": {
            fontWeight: 500
        }
    }
}));

const SectionNavigationItem = ({section, parentSlug, onClick, currentPath, depth}: SectionNavigationItemProps) => {
    const isSelected = currentPath[0] === section.slug;
    const [expanded, setExpanded] = useState(isSelected);
    const classes = useStyles();
    const currentSlug = currentPath[0];
    useEffect(() => {
        if (currentPath[0] === section.slug) {
            setExpanded(true);
        }
    }, [currentPath]);

    if (isTopLevelSectionPage(section)) {
        return <RouterLinkListItem
            to={trailingSlashIt(parentSlug) + section.slug}
            onClick={onClick}
            selected={isSelected}
            sx={{pl: 2 * depth}}
        >
            <ListItemText primary={section.title} inset/>
        </RouterLinkListItem>
    }

    return <>
        <ListItem
            button
            selected={!expanded && isSelected}
            sx={{pl: 2 + (2.5 * depth)}}
            onClick={() => {
                setExpanded(!expanded);
            }}>
            <ListItemIcon>
                {expanded ? <KeyboardArrowDownIcon/> : <ChevronRightIcon/>}
            </ListItemIcon>
            <ListItemText
                className={classes.root}
                primary={section.title}
            />
        </ListItem>
        <Collapse in={expanded}>
            {section.children?.map((childSection: ContentSectionType | SectionType) => (
                <SectionNavigationItem
                    key={childSection.slug}
                    section={childSection}
                    parentSlug={trailingSlashIt(parentSlug) + section.slug}
                    currentPath={currentPath[1] === childSection.slug ? currentPath.slice(1) : []}
                    depth={depth + 1}
                />
            ))}
        </Collapse>
    </>

};

export default SectionNavigationItem;