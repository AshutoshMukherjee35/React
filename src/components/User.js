import { useState, useEffect } from "react";

const User = (props) => {
    const[count] = useState(0);
    const [count2] = useState(2);

    useEffect(() => {
        //API calls
     let timer =  setInterval(()=> {
            console.log("Hello");
        },1000);

        //this is how u unmount using useEffect hook
        return () => {
            clearInterval(timer);
        }
    },[])

    return (
        <section className="card">
            <div>
            <h3>Count: {count}</h3>
            <h3>Count: {count2}</h3>
            <h2>Name: {props.name}</h2>
            <h2>Location: Raipur</h2>
            <h3>Contact: @ashutoshmukherjee35</h3>
            </div>
        </section>
    )
}
export default User;