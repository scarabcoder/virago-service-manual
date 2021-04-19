import ContentSectionType from "../../types/ContentSectionType";
import {Typography} from "@material-ui/core";
import React from "react";
import maintenanceItems from "../table/maintenanceItems";
import MaintenanceItem from "../../components/MaintenanceItem";

const maintenanceSchedule: ContentSectionType = {
    slug: "maintenance-schedule",
    title: "Maintenance Schedule",
    children: [{
        slug: "introduction",
        title: "Introduction",
        content: () => (<>
            <Typography>This chapter includes all information necessary to perform recommended inspections and
                adjustments. These preventive maintenance procedures, if followed, will ensure more reliable vehicle
                operation and a longer service life.</Typography>
            <Typography>The need for costly overhaul work will be greatly reduced. This
                information applies to vehicles already in in service and to new vehicles that are being prepared for
                sale. All service technicians should be familiar with this entire chapter.</Typography>
        </>)
    }, {
        slug: "maintenance-interval-charts",
        title: "Maintenance Interval Charts",
        content: () => (<>
            <Typography>Proper periodic maintenance is important.
                Especially important are the maintenance
                services related to emissions control. These
                controls not only function to ensure cleaner
                air but are also vital to proper engine operation and maximum performance.</Typography>
            <Typography fontStyle={"italic"}>The following list is re-written to suit the digital format, the items
                themselves are the same as the original. Initial break-in periods are excluded, refer to the original
                manual for break-in maintenance items.</Typography>
        </>)
    }, {
        slug: "maintenance-items",
        title: "Maintenance Items",
        content: () => (maintenanceItems.map((item, index) => (
            <MaintenanceItem key={index} {...item}/>
        )))
    }]
}

export default maintenanceSchedule;