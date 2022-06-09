import React from "react";
import AppBar from "../AppBar/AppBar";
import Container from "../Container/Container";
import Footer from '../Footer/Footer';
import socials from '../../data/social.json';
console.log(socials);
console.log(socials.map((social) => social.icon));
// import facebook from '../../images/icons/'

const Layout = ({ children }) => (
    <>
        <AppBar />
        <Container>{children}</Container>
        <Footer socials={socials} />
    </>
);

export default Layout;