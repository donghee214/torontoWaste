import React from 'react';
import TitleView from './title/titleView';
import Main from './main'
import ReactDOM from 'react-dom';
import './index.css';

const App = () => (
    <div className="App">
        <TitleView />
        <Main />
    </div>
)



ReactDOM.render(<App />, document.querySelector('#root'))
