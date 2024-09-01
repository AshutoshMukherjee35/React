import React from 'react'
import UserClassChild from './UserClassChild';

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        // console.log(props)

        this.state = {
            userInfo: {
                name: 'User',
                location: 'Default',
                bio: 'Default'
            }
        }
        console.log('Constructor of user class called')
    }

    componentDidMount() {
        // You can see that the setinterval is getting executed everytime even when we are navigating away from the page.
        //to mitigate this we have to write a cleanup code and we write it in the component will unmount method
        this.timer = setInterval(()=>{
            console.log('User class component did mount called every second')
        }, 1000)
    }

    componentDidUpdate() {
        console.log('Component DID update of user class');
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log('component unmounted')
    }

    render() {
        console.log('render of user class called')
        const {name , location, bio} = this.state.userInfo
        return(
            <section className='card'>
                <div>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h3>Bio: {bio}</h3>
                </div>
            </section>
        )
    }
}
export default UserClass; 