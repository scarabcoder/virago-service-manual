import ContentSectionType from "./ContentSectionType";

type SectionType = {
    slug: string,
    title: string,
    children: ContentSectionType[] | SectionType[]
};

export default SectionType;