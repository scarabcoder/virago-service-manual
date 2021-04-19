import MaintenanceItemType from "../../types/MaintenanceItemType";
import {Typography} from "@material-ui/core";
import React from "react";

const sixMonths = "Every 6 months / 2,500 miles";
const yearly = "Every 12 months / 5,000 miles";
const biyearly = "Every 24 months / 10,000 miles";


const maintenanceItems: MaintenanceItemType[] = [
    {
        title: "Valve Clearance",
        interval: sixMonths,
        description: () => <Typography>Check and adjust valve clearance when engine is cold</Typography>,
        pageLocation: "/virago-maintenance/engine/valve-clearance"
    },
    {
        title: "Exhaust system",
        interval: sixMonths,
        description: () => <Typography>Check for leakage; retighten as necessary; replace gasket(s) if
            necessary</Typography>,
        pageLocation: "/virago-maintenance/engine/exhaust-system"
    },
    {
        title: "Carburetor Synchronization",
        interval: sixMonths,
        description: () => <Typography>Adjust synchronization of carburetors</Typography>,
        pageLocation: "/virago-maintenance/engine/carburetor-synchronization"
    },
    {
        title: "Idle speed",
        interval: sixMonths,
        description: () => <Typography>Check and adjust engine idle speed; adjust cable free play if
            necessary</Typography>,
        pageLocation: "/virago-maintenance/engine/idle-speed"
    },
    {
        title: "Engine oil",
        interval: sixMonths,
        description: () => <Typography>Warm-up engine before draining</Typography>,
        pageLocation: "/virago-maintenance/engine/engine-oil"
    },
    {
        title: "Brake system",
        interval: sixMonths,
        description: () => <Typography>Adjust free play. Replace front pads/rear drum if necessary.</Typography>
    },
    {
        title: "Clutch",
        interval: sixMonths,
        description: () => <Typography>Adjust free play</Typography>,
        pageLocation: "/virago-maintenance/engine/clutch-adjustment"
    },
    {
        title: "Throttle/Speedo/Choke Cables",
        interval: sixMonths,
        description: () => <Typography>Apply chain lube thoroughly</Typography>
    },
    {
        title: "Brake/Clutch lever pivot shafts",
        interval: sixMonths,
        description: () => <Typography>Apply chain lube lightly</Typography>
    },
    {
        title: "Gear Shift/Brake Pedal Shaft Pivots",
        interval: sixMonths,
        description: () => <Typography>Apply chain lube lightly</Typography>
    },
    {
        title: "Steering head bearings/races",
        interval: sixMonths,
        description: () => <Typography>Check bearings assembly for looseness; moderately repack every 10k
            miles</Typography>
    },
    {
        title: "Wheel bearings",
        interval: sixMonths,
        description: () => <Typography>Check bearings for smooth rotation; replace if necessary</Typography>
    },
    {
        title: "Battery",
        interval: sixMonths,
        description: () => <Typography>Check specific gravity; check breather pipe for proper operation</Typography>
    },
    {
        title: "Spark plugs",
        interval: yearly,
        description: () => <Typography>Check condition; adjust gap/clean; replace every 18 months.</Typography>,
        pageLocation: "/virago-maintenance/engine/spark-plugs"
    },
    {
        title: "Crankcase ventilation system",
        interval: yearly,
        description: () => <Typography>Check fuel hose and vacuum pipe for cracks or damage; replace if
            necessary</Typography>
    },
    {
        title: "Fuel line",
        interval: yearly,
        description: () => <Typography>Check fuel hose for cracks or damage; replace if necessary</Typography>
    },
    {
        title: "Oil filter",
        interval: yearly,
        description: () => <Typography>Replace</Typography>,
        pageLocation: "/virago-maintenance/engine/engine-oil"
    },
    {
        title: "Final gear oil",
        interval: yearly,
        description: () => <Typography>Replace</Typography>
    },
    {
        title: "Air filter",
        interval: yearly,
        description: () => <Typography>Clean with compressed air</Typography>
    },
    {
        title: "Front fork oil",
        interval: biyearly,
        description: () => <Typography>Yamaha fork oil 10wt. or equivalent</Typography>
    },
    {
        title: "Repack steering stem bearings",
        interval: biyearly,
        description: () => <Typography>Clean and repack steering head bearings (top and bottom).</Typography>
    }
]

export default maintenanceItems;