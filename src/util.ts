import PageType from "./types/PageType";
import React from "react";
import ContentSectionType from "./types/ContentSectionType";

const trailingSlashIt = (path: string) => {
    if (path.length === 0) {
        return "/";
    }

    if (path.charAt(path.length - 1) !== "/") {
        path += "/";
    }
    return path;
}

export {trailingSlashIt};

const isTopLevelSectionPage = (section: ContentSectionType): boolean => {
    if (!section.children) return false;
    return section.children.some((child: ContentSectionType) => child.content !== undefined);
}

export {isTopLevelSectionPage};

const isContentPage = (section: ContentSectionType): boolean => {
    return section.content !== undefined || (section.children && section.children.some(childSection => childSection.content !== undefined));
}

export {isContentPage}

const titleToPath = (title: string): string => {
    return title.toLowerCase().replace(/ /g, "-");
};

type CreatePageProps = {
    title: string
    pages?: PageType[]
    content?: () => React.ReactNode
    id?: null
}

export {titleToPath};

const createPage = ({title, pages, content, id = null}: CreatePageProps): PageType => ({
    title: title,
    pages: pages,
    content: content,
    id: id || titleToPath(title)
});

export {createPage}

export default {};