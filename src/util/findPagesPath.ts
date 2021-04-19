import ContentSectionType from "../types/ContentSectionType";
import SectionType from "../types/SectionType";

type PageGenericType = {
    slug: string,
    children?: PageGenericType[]
}

const findPagesPath = (
    pathname: string[],
    pages: ContentSectionType[] | SectionType[],
    pagesPath: ContentSectionType[] | SectionType[]
): (ContentSectionType | SectionType)[] => {

    const pagesCast = pages as PageGenericType[];

    const foundPage = pagesCast.find((page: ContentSectionType | SectionType) => page.slug === pathname[0]) as unknown as ContentSectionType | SectionType;

    if (!foundPage) {
        return [];
    }

    if (pathname.length === 1 || !foundPage.children) {
        return [...pagesPath, foundPage];
    }


    return findPagesPath(pathname.slice(1), foundPage.children, [...pagesPath, foundPage]);
}

export default findPagesPath;