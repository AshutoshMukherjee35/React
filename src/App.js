import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {

    const [userName , setUserName] = useState();

    useEffect(() => {
        //API call to fetch the data
        const data = {
            // name: 'Ashutosh Mukherjee'
        }
        setUserName(data.name);
    },[]);

    return (
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <section className="app">       
                    <Header />
                    <Outlet />
                </section>
                </UserContext.Provider>
            </Provider>
       
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
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />,
    }
    ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
<RouterProvider router={appRouter} />

)