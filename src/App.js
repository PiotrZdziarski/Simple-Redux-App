import React, { Component } from 'react';
import './App.css';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from './store';
import Callbacks from "./components/Callbacks";
import Promises from "./components/Promises";
import AsyncAwait from "./components/AsyncAwait";

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <div className="App">
                    {/*<PostForm/>*/}
                    {/*<Posts/>*/}
                    {/*<Callbacks/>*/}
                    {/*<Promises/>*/}
                    <AsyncAwait/>
                </div>
            </Provider>
        );
    }
}

export default App;
