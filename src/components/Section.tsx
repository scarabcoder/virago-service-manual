import ContentSectionType from "../types/ContentSectionType";
import {isTopLevelSectionPage} from "../util";
import ContentSection from "./ContentSection";
import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {createStyles, Theme} from "@material-ui/core";

type SectionProps = {
    sections: ContentSectionType[],
    path: string[]
}

const Section = ({sections, path}: SectionProps) => {
    let childSection: ContentSectionType;
    if (path.length === 0) {
        childSection = sections[0];
    } else {
        childSection = sections.find((section: ContentSectionType) => section.slug === path[0]) || sections[0];
    }

    const newPath = [...path];
    newPath.shift();

    if (isTopLevelSectionPage(childSection)) {
        return <ContentSection section={childSection} depth={0}/>
    } else {
        return <Section sections={childSection.children as ContentSectionType[]} path={newPath}/>
    }

};

export default Section;