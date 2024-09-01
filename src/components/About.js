import React from 'react'
import User from './User'
import UserClass from './UserClass'


class About extends React.Component{
  constructor(props){
    super(props)
    console.log('Parent constructor called')
  }

  componentDidMount(){
    console.log('Parent component did mount')
  }

  render() {
    console.log('Parent render called')
    return(
      <div>
        <h1>About</h1>
        <h2>This is about component</h2>
        {/* <User name={'Ashutosh Mukherjee (function)'}/> */}
        <UserClass name={'Ashutosh Mukherjee (Class)'} location={'Raipur (class)'}/>
    </div>
    )
  }
}

export default About