// Code EyesOnMe Component Here

import React from 'react'

class EyesOnMe extends React.Component {
    render(){
        return(
            <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>Click Me</button>
        )
    }

    handleOnFocus = () => {
        console.log("Good!")
    }

    handleOnBlur = () => {
        console.log('Hey! Eyes on me!')
    }
}

export default EyesOnMe
