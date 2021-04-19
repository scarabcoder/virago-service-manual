import React from "react";

type PageType = {
    title: string;
    pages?: PageType[],
    content?: () => React.ReactNode,
    id: string
};

export default PageType;