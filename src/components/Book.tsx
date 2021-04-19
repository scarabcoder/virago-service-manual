import PageType from "../types/PageType";
import {useLocation} from "react-router";
import React from "react";

type BookType = {
    sections: PageType;
    path: string[];
};

const Book = ({sections, path}: BookType) => {

    return <></>;
}

export default Book;