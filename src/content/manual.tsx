import React from "react";
import motorcycleIdentification from "./general-information/motorcycleIdentification";
import maintenanceSchedule from "./virago-maintenance/maintenanceSchedule";
import engine from "./virago-maintenance/engine";
import ContentSectionType from "../types/ContentSectionType";

const manual: ContentSectionType[] = [
    {
        title: "General Information",
        slug: "general-information",
        children: [motorcycleIdentification]
    },
    {
        title: "Virago Maintenance",
        slug: "virago-maintenance",
        children: [maintenanceSchedule, engine]
    }
]

export default manual;