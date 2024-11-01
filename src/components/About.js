import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext'


class About extends React.Component{
  constructor(props){
    super(props)
    console.log('Parent constructor called')
  }

  componentDidMount(){
    console.log('Parent component did mount')
  }

  componentDidUpdate() {
    console.log('Component did update of ABout called')
  }

  componentWillUnmount() {
    console.log('Component will unmount of About called')
  }

  render() {
    console.log('Parent render called')
    return(
      <div className='m-[10%]'>
        <h1>About</h1>
        {/* This is how we use UserContext in a class based component */}
        <UserContext.Consumer>
          {(data) => <h1>{data.loggedInUser}</h1>}
        </UserContext.Consumer>
        <h2>This is about component</h2>
        <User />
        {/* <UserClass /> */}
    </div>
    )
  }
}

export default About

/*
  The render phase and the commit phase of the 2 child classes are batched together.
  This is the sequence of execution.

  - Parent constructor
  - Parent render

    - Ashutosh constructor
    - Ashutosh render
    - Elon constructor
    - Elon render

    <DOM UPDATED IN A SINGLE BATCH>
  - Ashutosh componentdidmount()
  - Elon componentdidmount()
  - Parent componentdidmount()

*/