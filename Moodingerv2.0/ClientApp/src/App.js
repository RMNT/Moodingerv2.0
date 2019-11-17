import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import FaceRecognition from './components/facerecognition';
import elementsLoggedOut from './components/NavElements';
import './styles.css';

let elements = [{
    id: 1,
    title: 'Home',
    link: '/'
},
{
    id: 2,
    title: 'Face Recognition Training',
    link: "/facerecognition"
},
{
    id: 3, title: 'Log out',
    link: '/'
}];

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="Navbar">
                    <Navbar elements={elements} />
                    <Switch>
                        <Route exact path='/'><Login elements={elements} /></Route>
                        <Route exact path='/register'><Register /></Route>
                        <Route exact path='/facerecognition'><FaceRecognition /></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App elements={elements} />, document.getElementById('root'));
