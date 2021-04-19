import ContentSectionType from "../../types/ContentSectionType";
import Notes from "../../components/Notes";
import React from "react";
import {Typography} from "@material-ui/core";
import Figure from "../../components/Figure";
import Paper from "@material-ui/core/Paper";
import PaperSpecs from "../../components/PaperSpecs";

const engine: ContentSectionType = {
    title: "Engine",
    slug: "engine",
    children: [{
        title: "Valve Clearance",
        slug: "valve-clearance",
        children: [{
            slug: "valve-clearance",
            content: () => (<>
                <Typography>Adjust the valve clearance as follows:</Typography>
                <Notes>
                    Valve clearance must be measured when the engine is cool to the touch.
                </Notes>
                <ol>
                    <Typography component={"li"}>Remove the seat, fuel tank, air filter, and crankcase ventilation
                        pipe.
                        <Figure imageSource={"engine/valve-clearance-1.png"}/>
                    </Typography>
                    <Typography component={"li"}>Remove the intake and exhaust valve covers.</Typography>
                    <Typography component={"li"}>
                        Remove the generator cover and crankshaft end cover.
                        <Figure imageSource={"engine/valve-clearance-3.png"}/>
                    </Typography>
                    <Typography component={"li"}>Align the "T" mark (for the rear cylinder) on the flywheel with the
                        stationary pointer on the crankcase cover. The pointer can be viewed through the timing window
                        in
                        the crankcase
                        cover. When the "T" mark is aligned with the stationary pointer, the piston is at Top Dead
                        Center
                        (TDC). Valve clearance should be checked and adjusted when the piston is at TDC on the
                        compression
                        stroke. The piston is at TDC on compression when there is free play in both valve
                        adjusters. The flywheel is marked as follows:
                        <Figure imageSource={"engine/valve-clearance-4.png"}/>
                    </Typography>
                    <Typography component={"li"}>
                        Use a feeler gauge to determine the clearance.
                        <PaperSpecs>
                            <Typography>Intake valve (cold): 0.10mm</Typography>
                            <Typography>Exhaust valve (cold): 0.15mm</Typography>
                        </PaperSpecs>
                    </Typography>
                    <Typography component={"li"}>
                        Loosen the valve adjuster lock nut. Turn the adjuster in or out to obtain the correct clearance.
                        Hold the adjuster to prevent it from moving, and thoroughly tighten the lock nut. Recheck the
                        clearance after tightening.
                        <Figure imageSource={"engine/valve-clearance-6.png"}/>
                    </Typography>
                    <Typography component={"li"}>
                        Rotate the crankshaft approximately 285 degrees clockwise to TDC for the front cylinder. Repeat
                        the
                        steps above, and check/adjust the valve clearance.
                    </Typography>
                    <Typography component={"li"}>
                        Install the intake and exhaust valve covers, the crankshaft end cover, and the generator cover.
                    </Typography>
                    <Typography component={"li"}>
                        Install the crankcase ventilation pipe, air filter, fuel tank, and the seat.
                        <Notes>
                            The air filter rubber gasket must be properly seated against the frame.
                        </Notes>
                        <Figure imageSource={"engine/valve-clearance-9.png"}/>
                    </Typography>
                    <Typography component={"li"}>
                        Connect the fuel and vacuum lines.
                    </Typography>
                </ol>
            </>)
        }]
    }, {
        title: "Spark Plugs",
        slug: "spark-plugs",
        children: [{
            slug: "spark-plug",
            content: () => (<>
                <ol>
                    <Typography component={"li"}>Check the electrode condition and wear, insulator color, and electrode
                        gap.</Typography>
                    <Typography component={"li"}>Clean the spark plug with spark plug cleaner if necessary. Use a wire
                        gauge to adjust the plug gap to the specification.</Typography>
                    <Typography component={"li"}>If the electrode becomes too worn, replace the spark plug.</Typography>
                    <Typography component={"li"}>When installing the plug, always clean the gasket surface, wipe off any
                        grime that might be present on the surface of the spark plug, and torque the spark plug
                        properly.</Typography>
                </ol>
                <PaperSpecs>
                    <Typography>Standard Spark Plug: NGK BP7ES</Typography>
                    <Typography>Spark Plug Gap: 0.7~0.8mm</Typography>
                    <Typography>Spark Plug Tightening Torque: 14 lb-ft</Typography>
                </PaperSpecs>
            </>)
        }]
    }, {
        title: "Crankcase Ventilation System",
        slug: "crankcase-ventilation-system",
        children: [{
            slug: "crankcase-ventilation-system",
            content: () => (<>
                <Typography>
                    Check the ventilation pipe from the cam-sprocket cover on the rear cylinder to the frame assembly
                    for
                    cracks or damage; replace if necessary;
                </Typography>
            </>)
        }]
    }, {
        title: "Fuel Line",
        slug: "fuel-line",
        children: [{
            slug: "fuel-line",
            content: () => <Typography>Check the fuel hoses and vacuum lines for cracks or damage; replace if
                necessary.</Typography>
        }]
    }, {
        title: "Exhaust System",
        slug: "exhaust-system",
        children: [{
            slug: "exhaust-system",
            content: () => <ol>
                <Typography component={"li"}>Tighten the intake manifold bolts and nuts.</Typography>
                <Typography component={"li"}>Replace the intake manifold gasket(s) if necessary.</Typography>
            </ol>
        }]
    }, {
        title: "Carburetor Synchronization",
        slug: "carburetor-synchronization",
        children: [{
            slug: "carburetor-synchronization",
            content: () => <>
                <Typography>Carburetors must be adjusted to open and close simultaneously. Adjust as
                    follows:</Typography>
                <Notes>
                    Valve clearance must be set properly before synchronizing the carburetors.
                </Notes>
                <ol>
                    <Typography component={"li"}>Remove the seat.</Typography>
                    <Typography component={"li"}>Disconnect the fuel and vacuum lines from the petcocks.</Typography>
                    <Typography component={"li"}>Remove the fuel-tank clamp, and remove the fuel tank.</Typography>
                    <Typography component={"li"}>Loosen the clamps on the carburetor ventilation pipes with the small
                        air filters.
                        <Figure imageSource={"engine/carburetor-synchronization-4.png"}/>
                    </Typography>
                    <Typography component={"li"}>Remove the vacuum lines from the intake manifolds, and install the
                        vacuum gauge lines to the intake manifolds.
                        <Notes>
                            The front-cylinder intake manifold has two vacuum lines coming out of it. Disconnect the
                            smaller diameter line, and leave the larger line in place on the manifold.
                        </Notes>
                    </Typography>
                    <Typography component={"li"}>
                        Place the fuel tank on the motorcycle and reconnect the fuel lines. Slightly raise the rear of
                        the fuel tank so you will have access to the synchronizing crew.
                    </Typography>
                    <Typography component={"li"}>
                        Turn the petcocks to the "PRI" position.
                    </Typography>
                    <Typography component={"li"}>
                        Start the engine and let it warm up.
                    </Typography>
                    <Typography component={"li"}>
                        Read the vacuum gauge. The readings for each carburetor should be the same. If not, adjust the
                        synchronizing screw until the readings are the same. Use a carburetor adjusting wrench with a
                        screwdriver tip.
                        <Figure imageSource={"engine/carburetor-synchronization-9.png"}/>
                        <Figure imageSource={"engine/valve-clearance-9-2.png"}/>
                    </Typography>
                    <Typography component={"li"}>
                        Reassemble the motorcycle.
                    </Typography>
                </ol>
            </>
        }]
    }, {
        title: "Idle Speed",
        slug: "idle-speed",
        children: [{
            slug: "idle-speed",
            content: () => (<>
                <ol>
                    <Typography component={"li"}>Start the engine, and warm it up for a few minutes.</Typography>
                    <Typography component={"li"}>Set the engine idle speed to the specified level by adjusting the
                        throttle stop screw on the front-cylinder carburetor. Turning the throttle stop screw in
                        (clockwise) increases the engine speed; turning it out (counter-clockwise) decreases the engine
                        speed. Use a tachometer for checking and adjusting the engine speed.
                        <Figure imageSource={"engine/idle-speed-2.png"}/>
                    </Typography>
                </ol>
                <Notes title={"CAUTION"}>
                    Never adjust the throttle stop screw on the rear-cylinder carburetor.
                </Notes>
                <PaperSpecs>
                    Engine Idle: 950~1,050 rpm
                </PaperSpecs>
            </>)
        }]
    }, {
        title: "Engine Oil",
        slug: "engine-oil",
        children: [{
            title: "Recommended Oil",
            slug: "recommended-oil",
            content: () => (<>
                <Typography>Use Yamalube 4-cycle oil or SAE 20W40 SE motor oil if the temperature does
                    not go below 5C / 40F. Use SAE 10W30 SE motor oil if the temperature does not go above 15C
                    (60F)</Typography>
            </>)
        }, {
            title: "Oil level measurement",
            slug: "oil-level-measurement",
            content: () => (<>
                <ol>
                    <Typography component={"li"}>
                        Place the motorcycle on the centerstand. Warm up the engine for several minutes.
                        <Notes>
                            Be sure the motorcycle is positioned straight up when checking the oil level; a
                                slight tilt toward the side can produce false readings.<br/>
                            If the oil sight glass appears to be black/solid, it's very likely
                                that the level of oil is higher than the top of the sight glass. This can be confirmed
                                by having an assistant lean the bike to the right to drop the oil level in the sight
                                glass.
                        </Notes>
                    </Typography>
                    <Typography component={"li"}>
                        With the engine stopped, check the oil level through the level window located at the lower part
                        of the left-side crankcase cover.
                        <Notes>Wait a few minutes until the oil level settles before checking.</Notes>
                        <Figure imageSource={"engine/oil-level-measurement-2.png"}/>
                    </Typography>
                    <Typography component={"li"}>
                        The oil level should be between the maximum and minimum marks. If the level is lower, add
                        sufficient oil to raise it to the proper level.
                        <Notes title={"CAUTION"} typographyComponent={"div"}>
                            After replacing the engine oil, check the oil pressure as described below:
                            <ol>
                                <Typography component={"li"}>
                                    Slightly loosen an oil-line union bolt in one of the cylinders.
                                </Typography>
                                <Typography component={"li"}>
                                    Start the engine. Keep it idling until oil beings to seep from the loosened union
                                    bolt.
                                </Typography>
                                <Typography component={"li"}>
                                    Turn the engine off, and tighten the bolt to specification.<br/>
                                    Tightening torque: 14.5 ft-lb
                                </Typography>
                            </ol>
                            If no oil comes out of the bolt after one minute, immediately turn off the engine so it will
                            not seize. Locate and resolve the problem, then recheck the oil pressure.
                        </Notes>
                    </Typography>
                </ol>
            </>)
        }, {
            title: "Oil change (without filter change)",
            slug: "oil-change-no-filter",
            content: () => (<>
                <ol>
                    <Typography component={"li"}>Warm up the engine for several minutes.</Typography>
                    <Typography component={"li"}>Place an oil pan under the engine.</Typography>
                    <Typography component={"li"}>
                        Remove the oil filler cap and the drain plug.
                        <Notes>
                            The oil from the oil filter cavity must be drained as well. Remove the lower of the three
                            bolts on
                            the oil filter cover to drain the oil filter cavity.
                        </Notes>
                    </Typography>
                    <Typography component={"li"}>
                        Install the drain plug and the filter cover bolt.
                        <PaperSpecs>
                            Drain Bolt Torque: 4.3 m-kg (31 ft-lb)
                        </PaperSpecs>
                    </Typography>
                    <Typography component={"li"}>
                        Add 3.0 liters (3.2 quarts) of engine oil (see previous section on recommended oil). Install the
                        oil filler cap.
                    </Typography>
                    <Typography component={"li"}>
                        Start the engine, and let it warm up. During warm-up, check for oil leakage. If oil leaks, stop
                        the engine immediately, and check for the cause.
                    </Typography>
                    <Typography component={"li"}>
                        Stop the engine and check the oil level.
                    </Typography>
                </ol>
            </>)
        }, {
            title: "Oil and filter change",
            slug: "oil-change-filter",
            content: () => (<>
                <ol>
                    <Typography component={"li"}>Warm up the engine for several minutes.</Typography>
                    <Typography component={"li"}>
                        Place an oil pan under the engine.
                        <Figure imageSource={"engine/oil-filter-change-2.png"}/>
                    </Typography>
                    <Typography component={"li"}>
                        Remove the oil filler cap and the drain plug; drain the engine oil.
                        <Notes>
                            The oil filter cover is secured by three screws. The lower one should be loosened until the
                            threaded portion comes out completely.
                        </Notes>
                        <Figure imageSource={"engine/oil-filter-change-3.png"}/>
                    </Typography>
                    <Typography component={"li"}>
                        Remove the oil filter cover.
                        <Notes title={"CAUTION"}>
                            Do NOT pry on the oil filter cover tabs to remove the cover. The tabs are brittle and known
                            to snap easily, and replacement covers can be difficult to find.
                        </Notes>
                        <Figure imageSource={"engine/oil-filter-change-4.png"}/>
                    </Typography>
                    <Typography component={"li"}>
                        Install the drain plug, new oil filter, and oil filter cover.
                        <PaperSpecs>
                            Drain plug torque: 4.3 m-kg (31 ft-lb)
                        </PaperSpecs>
                    </Typography>
                    <Typography component={"li"}>
                        Add 3.1 liters (3.3 quarts) of engine oil. Install the oil filler cap.
                    </Typography>
                    <Typography component={"li"}>
                        Start the engine, and let it warm up. During warm-up, check for oil leaks. If oil leaks, stop
                        the engine immediately, and check for the cause.
                    </Typography>
                    <Typography component={"li"}>
                        After warm-up, stop the engine and check the oil level.
                    </Typography>
                </ol>
            </>)
        }]
    }, {
        title: "Clutch Adjustment",
        slug: "clutch-adjustment",
        children: [{
            title: "Free play adjustment",
            slug: "free-play-adjustment",
            content: () => (<ol>
                <Typography component={"li"}>
                    Loosen the clutch-lever-adjuster lock nut.
                </Typography>
                <Typography component={"li"}>
                    Turn the cable adjuster either in or out until proper lever free play is attained. Tighten the lock
                    nut.
                    <Figure imageSource={"engine/free-play-adjustment-2.png"}/>
                </Typography>
            </ol>)
        }, {
            title: "Mechanism Adjustment",
            slug: "mechanism-adjustment",
            content: () => (<>
                <ol>
                    <Typography component={"li"}>Completely loosen the clutch cable.</Typography>
                    <Typography component={"li"}>Remove the adjuster cover. Loosen the lock nut and turn the
                        adjuster in (clockwise) until it lightly seats against a clutch push rod.
                        <Notes>
                            There is an "o-ring" on the screw shaft which will cause some resistance. Make sure the
                            screw positively but lightly contacts the push rod.
                        </Notes>
                        <Figure imageSource={"engine/mechanism-adjustment-2.png"}/>
                    </Typography>
                    <Typography component={"li"}>
                        Back the adjuster out 1/4 turn and tighten the lock nut. Install the adjuster cover.
                        <Notes title={"CAUTION"}>
                            Do not operate the clutch lever until the clutch mechanism adjustment is complete. This
                            could cause dislocation of the steel balls in the adjuster housing. <br/>
                            If the balls are out of
                            position in the housing, the clutch will not disengage. If this happens, the crankcase cover
                            will need to be removed and the the clutch ball bearing assembly will need to be
                            re-adjusted.
                        </Notes>
                    </Typography>
                    <Typography component={"li"}>
                        Adjust the clutch lever free play.
                    </Typography>
                </ol>
            </>)
        }]
    }, {
        title: "Checking Ignition Timing",
        slug: "checking-ignition-timing",
        children: [{
            slug: "checking-ignition-timing",
            content: () => (<>
                <Typography>
                    Check the ignition timing with a timing light by observing the stationary pointer and the marks
                    stamped on the flywheel.
                </Typography>
                <ol>
                    <Typography component={"li"}>Remove the generator cover.</Typography>
                    <Typography component={"li"}>Connect the timing light to the rear (#1) cylinder spark plug
                        wire.</Typography>
                    <Typography component={"li"}>
                        Start the engine, and keep the engine running at the specified speed. Use a tachometer to check
                        the engine speed.
                        <PaperSpecs>
                            Engine Speed: 1,000 RPM
                        </PaperSpecs>
                    </Typography>
                    <Typography component={"li"}>The stationary pointer (in the timing window) should be within the
                        firing range shown on the flywheel. If the pointer is not within the range or if it is not
                        steady, check the flywheel and/or pickup assembly for tightness and damage.
                        <Figure imageSource={"engine/ignition-timing-4.png"}/>
                    </Typography>
                    <Typography component={"li"}>Reinstall the generator cover.</Typography>
                </ol>
            </>)
        }]
    }, {
        title: "Compression Pressure Measurement",
        slug: "compression-pressure-measurement",
        children: [{
            slug: "compression-pressure-measurement",
            content: () => (<>
                <Typography>Insufficient compression pressure will result in performance loss and may indicate leaking
                    valves or worn or damaged piston rings.</Typography>
                <ol>
                    <Typography component={"li"}>Make sure the valve clearance is correct.</Typography>
                    <Typography component={"li"}>Warm up the engine for 2~3 minutes; stop the engine.</Typography>
                    <Typography component={"li"}>Remove both spark plugs.</Typography>
                    <Typography component={"li"}>Install a compression gauge.</Typography>
                    <Typography component={"li"}>Turn over the engine with the electric starter (make sure the battery
                        is fully charged) with the throttle wide open until the pressure indicated on the gauge does not
                        increase further. The compression should be within the specified levels.
                        <PaperSpecs>
                            <Typography>Compression pressure (at sea level):</Typography>
                            <Typography>
                                Standard: 156 psi<br/>
                                Minimum: 128 psi<br/>
                                Maximum: 171 psi
                            </Typography>
                        </PaperSpecs>
                        <Notes title={"WARNING"}>
                            When cranking the engine, ground the spark plug wires to prevent sparking.
                        </Notes>
                    </Typography>
                    <Typography component={"li"}>If the pressure is too low, squirt a few drops of oil into the
                        cylinder being measured. Measure compression again. If there is a higher reading than before
                        (without oil), the piston rings may be worn or damaged. If the pressure remains the same after
                        measuring with the oil, one or both rings and valves may be the source of the
                        problem.</Typography>
                    <Typography component={"li"}>Check both cylinders. Compression pressure should not vary more than
                        the specified value from one cylinder to the other.
                        <PaperSpecs>
                            Maximum difference between each cylinder: 14 psi
                        </PaperSpecs>
                    </Typography>
                </ol>
            </>)
        }]
    }]
}

export default engine;