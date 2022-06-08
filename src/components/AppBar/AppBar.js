import React from 'react';
// import styles from './AppBar.module.css';
import { Form, FormControl, Button, Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';


const AppBar = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Почаївська територіальна громада</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Головна</Nav.Link>
                            <Nav.Link href="#action2">Новини</Nav.Link>
                            <NavDropdown title="Про громаду" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Історія Почаєва</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Символи Почаєва</NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Старостинські округи</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Видатні діячі</NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Визначні місця</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Міська рада" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Міський голова</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Заступники</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Виконавчий комітет</NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Склад постійних комісій</NavDropdown.Item>
                                <NavDropdown.Item href="#action7">Організаційна структура</NavDropdown.Item>
                                <NavDropdown.Item href="#action9">Депутатський склад</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Пошук"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Пошук</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
};


export default AppBar;