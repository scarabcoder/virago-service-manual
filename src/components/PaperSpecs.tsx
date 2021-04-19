import React from "react";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";

type PaperSpecsProps = {
    children: React.ReactNode
}

const PaperSpecs = ({children}: PaperSpecsProps) => {

    return <Paper sx={{mb: 1, mt: 1, p: 1, pl: 2}}>
        {children}
    </Paper>
}

export default PaperSpecs;