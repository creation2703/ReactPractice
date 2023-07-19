import React from 'react';
import './styles.css';
class Welcome extends React.Component {
    render() {
        return (
            <div>
        <h1> Hello {this.props.name} should not be called {this.props.prisonNo} </h1>
            {this.props.children}
        </div>
        )
        
    }
}

export { Welcome }; 
