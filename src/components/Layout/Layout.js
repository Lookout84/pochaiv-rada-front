import React from "react";
import AppBar from "../AppBar/AppBar";
import Container from "../Container/Container";
import FooterContainer from "../Container/Footer";

const Layout = ({ children }) => (
    <>
        <AppBar />
        <Container>{children}</Container>
        <FooterContainer />
    </>
);

export default Layout;