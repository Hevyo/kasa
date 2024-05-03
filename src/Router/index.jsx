import Home from "../pages/Home"
import About from "../pages/About"
import Accomodation from "../pages/Accomodation"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Error from "../pages/Error"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "accomodation/:id",
                element: <Accomodation />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
])

function Router() {
    return <RouterProvider router={router}></RouterProvider>
}

export default Router
