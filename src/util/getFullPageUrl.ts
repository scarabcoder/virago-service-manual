import ContentSectionType from "../types/ContentSectionType";

const getFullPageUrl = (pages: ContentSectionType[], appDomain: string) => {
    const scheme = process.env.NODE_ENV === "production" ? "https://" : "http://";

    return scheme + appDomain + "/" + (pages.map(page => page.slug).join("/"));
}

export default getFullPageUrl;