import React from 'react'

class UserClassChild extends React.Component{
    constructor(props){
        super(props);

        // console.log(this.props.name+' youngest child constructor')
    }

    componentDidMount(){
        // console.log(this.props.name+' youngest child componentDidMount');
    }

    render() {
        console.log(this.props.name+ ' youngest child render ')
        const {name} = this.props;
        return(
            <div>
                <h1>{name+"static content"}</h1>
            </div>
        )
    }
}
export default UserClassChild