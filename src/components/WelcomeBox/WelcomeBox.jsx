import React from 'react';
import { Link } from 'react-router-dom';
const WelcomeBox = () => {
    return (
        <div className="welcome-box">
            <div className="webpack-logo" />
            <hr />
            <h1>Start React Boilerplate</h1>
            <p>Hi! This is react start boilerplate! </p>
            <p>There are several pages in this pack and several components. One of them it's this text. It placed in folder components. </p>
            <p>Also this pack includes webpack, and scss for styles your project. You can <Link to='/demo'>find here demo page</Link> and page 404 if you insert something wrong in browser location</p>
        </div>
    )
}
export default WelcomeBox;