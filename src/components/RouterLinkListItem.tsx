import React, {Ref} from "react";
import {Link} from "react-router-dom";
import {ListItem, ListItemProps} from "@material-ui/core";

type RouterLinkListItemType = {
    to: string,
    children: React.ReactNode,
    onClick?: () => void
} & ListItemProps;


const RouterLinkListItem = React.forwardRef(({to, children, selected, onClick, sx}: RouterLinkListItemType, ref) => {

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref: Ref<HTMLAnchorElement>) => <Link onClick={onClick} to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink} selected={selected} sx={sx}>
                {children}
            </ListItem>
        </li>
    );
});

export default RouterLinkListItem;