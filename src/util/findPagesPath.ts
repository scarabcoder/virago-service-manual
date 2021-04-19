import ContentSectionType from "../types/ContentSectionType";
type PageGenericType = {
    slug: string,
    children?: PageGenericType[]
}

type findPagesReturnValue = {
    pages: ContentSectionType[],
    fullMatch: boolean
}

const findPagesPath = (
    pathname: string[],
    pages: ContentSectionType[]
): findPagesReturnValue => {
    if(pathname.length === 0) {
        return {
            pages: [],
            fullMatch: true
        }
    }
    const found = findPagesPathRecursive(pathname, pages, []);

    return {
        pages: found,
        fullMatch: found.length === pathname.length
    }
}

const findPagesPathRecursive = (
    pathname: string[],
    pages: ContentSectionType[],
    pagesPath: ContentSectionType[]
): (ContentSectionType)[] => {

    const pagesCast = pages as PageGenericType[];
    const foundPage = pagesCast.find((page: ContentSectionType) => page.slug === pathname[0]) as unknown as ContentSectionType;

    if (!foundPage) {
        return [];
    }

    if (pathname.length === 1 || !foundPage.children) {
        return [...pagesPath, foundPage];
    }

    return findPagesPathRecursive(pathname.slice(1), foundPage.children, [...pagesPath, foundPage]);
}

export default findPagesPath;