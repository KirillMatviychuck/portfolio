import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Technologies} from "./Technologies/Technologies";
import {MyProjects} from "./MyProjects/MyProjects";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Technologies />
            <MyProjects />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
