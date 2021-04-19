import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {createStyles, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

type FigureProps = {
    imageSource: string,
    text?: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: "100%"
    }
}));

const Figure = ({imageSource, text}: FigureProps) => {
    const classes = useStyles();

    return <Box mt={1} mb={1}>
        <img src={"/image/" + imageSource} alt={text} className={classes.root}/>
        <Typography variant={"subtitle2"}>{text}</Typography>
    </Box>
}

export default Figure;