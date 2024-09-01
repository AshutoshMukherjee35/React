import React from 'react'

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)

        this.state = {
            count: 0,
            count3: 3,
        }
        console.log('Child constructor called')
    }

    componentDidMount() {
        console.log('Child mounted')
    }

    render() {
        console.log('Child render called')
        const{name , location} = this.props;
        const{count, count3} = this.state;
        return(
            <section className='card'>
                <div>
                <h3>Count: {count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                        count3: this.state.count3 + 1
                    })
                }}>Increment</button>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h3>Contact: @ashutoshmukherjee35</h3>
                </div>
            </section>
        )
    }
}
export default UserClass; 