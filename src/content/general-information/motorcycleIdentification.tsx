import React from "react";
import {Typography} from "@material-ui/core";
import ContentSectionType from "../../types/ContentSectionType";
import Notes from "../../components/Notes";
import Figure from "../../components/Figure";


const motorcycleIdentification: ContentSectionType = {
    slug: "motorcycle-identification",
    title: "Motorcycle Identification",
    children: [{
        slug: "frame-serial-number",
        title: "Frame Serial Number",
        content: () => (
            <>
                <Typography>
                    The frame serial number is stamped into the right-side of the steering head pipe.
                </Typography>
                <Figure
                    imageSource={'motorcycle-identification/frame-serial-number.png'}/>
            </>)
    }, {
        slug: "engine-serial-number",
        title: "Engine Serial Number",
        content: () => (<>
            <Typography>
                The engine serial number is stamped into the elevated part of the right rear section of the engine.
            </Typography>
            <Notes>
                The first three digits of these numbers are for
                model identification; the remaining digits are
                the unit production number.
            </Notes>
            <Figure imageSource={'motorcycle-identification/engine-serial-number.png'}/>
        </>)
    }]
}
export default motorcycleIdentification;
