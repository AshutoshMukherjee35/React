import React from "react";
import ReactDOM from "react-dom/client";

//react element {TitleComponent}

const TitleComponent = <h1>This is title component as react element</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));


const RenderTitleComponent = () => {
   return (
    <div>
        {TitleComponent}
    </div>
   )
}
const TitleComponent2 = () => {
    return (
        <h1>This is title component 2 as react functional component</h1>
    )
};


// {<TitleComponent/>} {<TitleComponent></TitleComponent>} 
const TitleComponentAsFunctionalComponent = () => (
    <div>
    <h1>This is title component as functional component</h1>
    <TitleComponent2></TitleComponent2>
    </div>
)
root.render(<TitleComponentAsFunctionalComponent />);
