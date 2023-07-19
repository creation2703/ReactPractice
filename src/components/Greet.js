import React from 'react'

const Greet = (props) => {
    console.log(props)
    return (
        <div>
        <h1> Hello {props.name} should not be called {props.prisonNo} </h1>
        {props.children}
        </div>
    
    )
}
export {Greet}