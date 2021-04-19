import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#bb4530",
            light: "#f3755a",
            dark: "#851007"
        },
        secondary: {
            main: "#4caf50",
            light: "#80e27e",
            dark: "#087f23",
            contrastText: "#000000"
        },
        background: {
            default: "#f5f4f1"
        }
    },
    typography: {
        h2: {
            fontSize: "1.75rem"
        },
        h3: {
            fontSize: "1.5rem"
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                body1: {
                    margin: "12px 0px"
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: "28px"
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                inset: {
                    paddingLeft: "28px"
                }
            }
        }
    }
});

export default theme;