import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from "./components/Body";


const AppLayout = () => {
    return (
        <section className="app">
            {/*header */}
            <Header />
            {/*body */}
            <Body />
            {/*footer */}

        </section>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)