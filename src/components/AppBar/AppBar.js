import React from 'react';
import { Form, FormControl, Button, Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import Logo from '../../images/Pochaiv.png';

const AppBar = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/"><img src={Logo} width="50" alt="Герб Почаєва" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-4"
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
                                <NavDropdown.Item href="#action3">Секретар міської ради</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Заступники</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Керуючий справами виконавчого комітету</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Виконавчий комітет</NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Склад постійних комісій</NavDropdown.Item>
                                <NavDropdown.Item href="#action7">Організаційна структура</NavDropdown.Item>
                                <NavDropdown.Item href="#action9">Депутатський склад</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Публічна інформація" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Розпорядження міського голови</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Проєкти рішень сесії</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Проєкти рішень виконкому</NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Рішення сесій</NavDropdown.Item>
                                <NavDropdown.Item href="#action7">Рішення виконкому</NavDropdown.Item>
                                <NavDropdown.Item href="#action9">Бюджет міста</NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Звіти</NavDropdown.Item>
                                <NavDropdown.Item href="#action7">Регуляторна політика</NavDropdown.Item>
                                <NavDropdown.Item href="#action9">Запобігання корупції</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Структурні підрозділи" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Фінансовий відділ</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Відділ освіти, молоді та спорту</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Відділ соціального захисту населення та праці</NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Центр надання соціальних послуг</NavDropdown.Item>
                                <NavDropdown.Item href="#action7">Центр культурних послуг</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" >Контакти</Nav.Link>
                        </Nav>
                        <Form className="d-flex me-3">
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