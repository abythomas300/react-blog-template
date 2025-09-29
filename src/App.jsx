import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import "./App.css"
import { ThemeProvider } from "@mui/material"
import customTheme from "./theme/Theme"

function App() {
    return (
       <>
         <ThemeProvider theme={customTheme} >
            <Header />
            <MainContent />
            <Footer />
         </ThemeProvider>
       </>
    )
}

export default App