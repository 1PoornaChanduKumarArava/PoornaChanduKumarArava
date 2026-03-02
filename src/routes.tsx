import { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./Home"
import Experience from "./Experience"
import Education from "./Education"
import Certifications from "./Certifications"
import ChatbotComponent from "./ChatbotComponent"
import TicTacToeGame from "./TicTacToeGame"
import BookShelf from "./MyBookShelf"
import Projects from "./Projects"
import Skills from "./Skills"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            <div style={{ flex: 1 }}>
                {children}
            </div>

            <ChatbotComponent />
            <Footer />
        </div>
    )
}

const AppRouter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Layout><Home/></Layout>
            },
            {
                path:'/Home',
                element:<Layout><Home/></Layout>
            },
            {
                path:'/BookShelf',
                element:<Layout><BookShelf/></Layout>
            },
            {
                path:'/Experience',
                element:<Layout><Experience/></Layout>
            },
            {
                path:'/Education',
                element:<Layout><Education/></Layout>
            },
            {
                path:'/projects',
                element:<Layout><Projects/></Layout>
            },
            {
                path:'/Skills',
                element:<Layout><Skills/></Layout>
            },
            {
                path:'/Certifications',
                element:<Layout><Certifications/></Layout>
            },
            {
                path:'/Awards',
                element:<Layout><Education/></Layout>
            },
            {
                path:'/Games/TicTacToeGame',
                element:<Layout><TicTacToeGame/></Layout>
            }
        ]
    }
])

export default AppRouter;
