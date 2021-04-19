import ContentSectionType from "../types/ContentSectionType";

const getFullPageUrl = (pages: ContentSectionType[]) => {
    const scheme = process.env.NODE_ENV === "production" ? "https://" : "http://";

    return scheme + process.env.HOST + "/" + (pages.map(page => page.slug).join("/"));
}

export default getFullPageUrl;