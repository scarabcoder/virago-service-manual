import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {Paper} from "@material-ui/core";

type NotesProps = {
    title?: string,
    children: (() => React.ReactNode) | string | React.ReactNode,
    component?: React.ElementType
}

const Notes = ({title = "Note", children, component: ContentElement = Typography}: NotesProps) => {
    return <>
        <Paper sx={{p: 1, mt: 1, mb: 1}}>
            <Divider textAlign="left">{title}</Divider>
            <ContentElement>
                {children}
            </ContentElement>
            <Divider sx={{mb: 1}}/>
        </Paper>
    </>
};

export default Notes;