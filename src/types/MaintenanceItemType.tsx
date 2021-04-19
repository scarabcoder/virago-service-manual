import React from "react";

type MaintenanceItemType = {
    title: string,
    description: () => React.ReactNode,
    pageLocation?: string,
    interval: string
}

export default MaintenanceItemType;