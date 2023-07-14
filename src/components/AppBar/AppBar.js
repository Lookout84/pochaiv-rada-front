import React, { useState } from 'react';
import {
  Form,
  FormControl,
  Button,
  Container,
  NavDropdown,
  Navbar,
  Nav,
} from 'react-bootstrap';
import Logo from '../../images/Pochaiv.png';
import s from './AppBar.module.css';

const AppBar = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = [];
    const elements = document.querySelectorAll('#navbarScrollingDropdown a');
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].textContent.includes(searchText)) {
        results.push(elements[i]);
      }
    }
    setSearchResults(results);
  };

  return (
    <header>
      <Navbar
        className={s.Nav}
        sticky="top"
        fixed="top"
        bg="primary"
        variant="dark"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={Logo} width="50" alt="Герб Почаєва" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-4"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Головна</Nav.Link>
              <Nav.Link href="#action2">Новини</Nav.Link>
              <NavDropdown title="Про громаду" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Історія Почаєва
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Символи Почаєва
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Старостинські округи
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Видатні діячі
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Визначні місця
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Міська рада" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Міський голова
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  Секретар міської ради
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Заступники</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Керуючий справами виконавчого комітету
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Виконавчий комітет
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Склад постійних комісій
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Організаційна структура
                </NavDropdown.Item>
                <NavDropdown.Item href="#action9">
                  Депутатський склад
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Публічна інформація"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">
                  Розпорядження міського голови
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Проєкти рішень сесії
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Проєкти рішень виконкому
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Рішення сесій
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Рішення виконкому
                </NavDropdown.Item>
                <NavDropdown.Item href="#action9">
                  Бюджет міста
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">Звіти</NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Регуляторна політика
                </NavDropdown.Item>
                <NavDropdown.Item href="#action9">
                  Запобігання корупції
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Структурні підрозділи"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">
                  Фінансовий відділ
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Відділ освіти, молоді та спорту
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Відділ соціального захисту населення та праці
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Центр надання соціальних послуг
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Центр культурних послуг
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Е-демократія" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Е-петиція</NavDropdown.Item>
                <NavDropdown.Item href="/appeal">Е-звернення</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Е-консультація
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Бюджет участі
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Контакти</Nav.Link>
            </Nav>
            <Form
              className="d-flex me-3"
              onSubmit={e => {
                e.preventDefault();
                alert(
                  'Пошук в розділі "' +
                    e.target.search.value +
                    '" не знайдено.',
                );
              }}
            >
              <FormControl
                name="search"
                type="search"
                placeholder="Пошук"
                className="me-2"
                aria-label="Search"
              />
              <Button type="submit" variant="outline-light">
                Пошук
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppBar;
