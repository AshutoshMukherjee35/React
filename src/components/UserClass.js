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

   async componentDidMount() {
        // console.log(this.props.name+' Child mounted')
        const data = await fetch('https://api.github.com/users/ashutoshmukherjee35');
        // console.log(data);
        const json = await data.json();
        // console.log(json)

        this.setState({
            userInfo: json
        })
        console.log('Component did mount of userClass called')
    }

    componentDidUpdate() {
        console.log('Component DID update of user class');
    }

    componentWillUnmount() {
        console.log('Component WILL unmount of user class');
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