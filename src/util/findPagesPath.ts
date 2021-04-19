import ContentSectionType from "../types/ContentSectionType";
type PageGenericType = {
    slug: string,
    children?: PageGenericType[]
}

const findPagesPath = (
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


    return findPagesPath(pathname.slice(1), foundPage.children, [...pagesPath, foundPage]);
}

export default findPagesPath;