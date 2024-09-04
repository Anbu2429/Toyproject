import React from "react";

import './Home.css';

function Home({ onSignOut }) {
    return (
        <>
            <div className="home-container">
                <h1 className="home-text">Welcome to the <br />Toy Store</h1>
                <p className="home-text1">Explore our toy wonderland </p>
                <br></br>
                <p className="home-text2">Buy two get one</p>
            </div>
        </>
    );
}

export default Home;