import React, { Component } from 'react'
import App from "../App"
import SignUpView from '../Containers/SignUpView/SignUpView';
import {BrowserRouter,Route} from 'react-router-dom';


class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
            <Route exact path="/"  component={App}/>
            <Route path="/signup" strict component={SignUpView}/>
            </div>    
            </BrowserRouter>
        )
    }
}

export default Routes