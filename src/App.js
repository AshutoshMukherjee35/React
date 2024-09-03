import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";

const AppLayout = () => {
    return (
        <section className="app">       
            <Header />
            <Outlet />
        </section>
    )
}


const Grocery = lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: (
                <Suspense fallback={<h1>Loading....</h1>}>
                    <Grocery />
                </Suspense>
            )
            },
            {
                path: '/resturants/:resid',
                element: <ResturantMenu />
            }
        ],
        errorElement: <Error />,
    }
    ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)