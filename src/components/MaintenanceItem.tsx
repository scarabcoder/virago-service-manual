import MaintenanceItemType from "../types/MaintenanceItemType";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {createStyles} from "@material-ui/core";
import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(({palette, spacing}: Theme) => createStyles({
    root: {
        display: "flex",
        justifyContent: "space-between"
    }
}));


const MaintenanceItem = ({description, pageLocation, title, interval}: MaintenanceItemType) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const classes = useStyles();

    return <>
        <ListItem button onClick={() => setIsExpanded(!isExpanded)}>
            <ListItemIcon>
                {isExpanded ? <KeyboardArrowDownIcon/> : <ChevronRightIcon/>}
            </ListItemIcon>
            <ListItemText
                primary={title}
                secondary={interval}
                primaryTypographyProps={{mb: 0}}
            />
        </ListItem>
        <Collapse in={isExpanded}>
            <Box mt={1} mb={1}>
                {description()}
                {pageLocation ? <Button component={Link} to={pageLocation}>Instructions</Button> : null}
            </Box>
        </Collapse>
    </>;
};

export default MaintenanceItem;