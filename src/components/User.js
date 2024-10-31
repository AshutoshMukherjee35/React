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
        <section className="w-[40%] p-[2rem] mt-[1rem]">
            <div className="leading-[3rem]">
            <h3 className="leading-[3rem]">Count: {count}</h3>
            <h3 className="leading-[3rem]">Count: {count2}</h3>
            <h2 className="leading-[3rem]">Name: {props.name}</h2>
            <h2 className="leading-[3rem]">Location: Raipur</h2>
            <h3 className="leading-[3rem]">Contact: @ashutoshmukherjee35</h3>
            </div>
        </section>
    )
}
export default User;