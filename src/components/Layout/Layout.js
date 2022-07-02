import React from "react";
// import AppBar from "../AppBar/AppBar";
import Container from "../Container/Container";
// import Footer from '../Footer/Footer';
// import socials from '../../data/social.json';
import WeatherApp from '../Weather/Weather';


const Layout = ({ children }) => (
    <>
        {/* <AppBar /> */}
        <Container>{children}</Container>
        {/* <Footer socials={socials} /> */}
        <WeatherApp />
    </>
);

export default Layout;