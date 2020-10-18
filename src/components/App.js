import React, { Component } from 'react';
import Posts from './Posts';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <div className='ui container'>
                <Posts />
            </div>
        )
    }
}

export default App;