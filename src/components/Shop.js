import React from 'react';

import Nav from './Nav';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';

class Shop extends React.Component {
    state = {  }
    render() {
        return (
            <>
                <h1>To jest komponent SHOP</h1>
                <Nav/>
                <MainContent/>
                <Sidebar/>
                <Footer/>
            </>
        );
    }
}

export default Shop;
