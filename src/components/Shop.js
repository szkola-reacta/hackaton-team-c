import React from 'react';

import Nav from './Nav/Nav';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer/';

class Shop extends React.Component {
    state = {  }
    render() {
        return (
            <>
                <Nav/>
                <MainContent/>
                <Sidebar/>
                <Footer/>
            </>
        );
    }
}

export default Shop;
