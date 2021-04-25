const deviceTypeToWidth = (type: string): number => {
    console.log("Testing device type to width: ", type);
    switch(type) {
        case "tablet":
            return 960;
        case "desktop":
            return 1280;
        default:
            return 320;
    }
};

export default deviceTypeToWidth;