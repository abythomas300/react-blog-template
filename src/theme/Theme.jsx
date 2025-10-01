import { createTheme } from "@mui/material";

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#3EB489',
        },
        secondary: {
            main: '#B43E69'
        }
    },
    typography : {
        fontFamily: ["Inter", 'sans-serif'].join(","),
        h2: {
            fontFamily: ["Oswald", 'sans-serif'].join(",")
        },
        h4: {
            fontFamily: ["Oswald", 'sans-serif'].join(",")
        }
    }
})

export default customTheme


