import React from "react";
import ReactDOM from "react-dom/client";


// JSX => React.createElement =>ReactElement which is a JS object => HTMLElement(render)
//react element: jsx is a react element
const jsxHeading = <h1 className="head" tabIndex="1">Hello World from jsx</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(jsxHeading);
console.log(jsxHeading)

//react components
//functional component is a function that returns a react element

//This is component composition
const HeadingComponent = () => {
    return <h1>Functional Component</h1>
}
root.render(<HeadingComponent/>);

const HeadingComponent2 = () => (
    <div id="header">
        <HeadingComponent />
        <h1>Heading component 2</h1>
    </div>
);

const fn = () => true;
const number = 1000;

const Heading3 = function() {
    return(
        <div id="header">
        {jsxHeading}
        <HeadingComponent />
        <HeadingComponent2 />
        <h1>Heading component 3</h1>
        {/*u can run any piece of code over here. Any JS code can be run over here. */}
        <h2> {number} </h2>
        <h3>{100+200}</h3>
        {console.log('sssss')}
    </div>
    )
}


//css: cross site scripting
//if the api gives malicious code. in this case the data variable may pass some malecious code then the attacker can cause 
//css but JSX sanitizes the data and from that we can avoid the css. So the malecious code won't run as jsx would sanitize it.
// const data = api.getdata();

const Example = () => {
    return (
        <div>
            {/* {data} */}
            <h1>Example component</h1>
            {/*2 ways of writing the component */}
            <HeadingComponent></HeadingComponent>
            <HeadingComponent/>
            {Heading3()}
        </div>
    )
}
root.render(<Example />)