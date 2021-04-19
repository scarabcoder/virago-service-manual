import React from "react";

type ContentSectionType = {
    slug: string,
    content?: () => React.ReactNode,
    title?: string,
    children?: ContentSectionType[]
}

export default ContentSectionType;