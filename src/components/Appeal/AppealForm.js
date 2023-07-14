import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';

const AppealForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    category: '',
    socialStatus: '',
    requestType: '',
    directionSign: '',
    date: '',
    content: '',
    consent: false,
    isHuman: false,
  });

  function onChange(value) {
    console.log('Captcha value:', value);
    setFormData(prevFormData => ({
      ...prevFormData,
      isHuman: true,
    }));
  }

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Перевірка на isHuman перед відправкою форми
    if (!formData.isHuman) {
      console.log('Підтвердіть, що ви не робот.');
      return;
    }

    // Ваш код для обробки і відправки даних на електронну пошту

    // Приклад виводу даних в консоль
    console.log(formData);
  };

  return (
    <section>
      <h1>Е-звернення</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Прізвище, ім'я та по-батькові:
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Стать:
          <Form.Select
            aria-label="Default select example"
            name="gender"
            value={formData.category}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Чоловік">Чоловік</option>
            <option value="Жінка">Жінка</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Місце проживання:
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Індекс, область, населений пункт, вулиця, будинок, квартира"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Телефон:
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="У форматі +380ХХХХХХХХХ"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Електронна пошта:
          <Form.Control
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Категорія (вибрати одну з вказаних позицій):
          <Form.Select
            aria-label="Default select example"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Без пільг</option>
            <option value="Учасник війни">Учасник війни</option>
            <option value="Дитина з інвалідністю">Дитина з інвалідністю</option>
            <option value="Одинока мати">Одинока мати</option>
            <option value="Мати-героïня">Мати-героïня</option>
            <option value="Багатодітна сім'я">Багатодітна сім'я</option>
            <option value="Особа, що потерпіла від Чорнобильськоï катастрофи  ">
              Особа, що потерпіла від Чорнобильськоï катастрофи{' '}
            </option>
            <option value="Герой України">Герой України</option>
            <option value="Герой Радянського Союзу">
              Герой Радянського Союзу
            </option>
            <option value="Герой Соціалістичної праці">
              Герой Соціалістичної праці
            </option>
            <option value="Учасник ліквідації наслідків аварії на ЧАЕС">
              Учасник ліквідації наслідків аварії на ЧАЕС
            </option>
            <option value="Дитина">Дитина</option>
            <option value="Дитина війни">Дитина війни</option>
            <option value="Iншi категорії">Iншi категорії</option>
            <option value="Учасник ATO">Учасник ATO</option>
            <option value="Член сім'ї загиблого">Член сім'ї загиблого</option>
            <option value="Переселенець або внутрішньо переміщена особа">
              Переселенець або внутрішньо переміщена особа
            </option>
            <option value="Особа з інвалідністю внаслідок Другої світової війни">
              Особа з інвалідністю внаслідок Другої світової війни
            </option>
            <option value="Особа з інвалідністю в наслідок війни">
              Особа з інвалідністю в наслідок війни
            </option>
            <option value="Учасник бойових дій">Учасник бойових дій</option>
            <option value="Ветеран праці">Ветеран праці</option>
            <option value="Ветеран військової служби">
              Ветеран військової служби
            </option>
            <option value="Особа з інвалідністю І групи">
              Особа з інвалідністю І групи
            </option>
            <option value="Особа з iнвалiднiстю ІІ групи">
              Особа з iнвалiднiстю ІІ групи
            </option>
            <option value="Особа з iнвалiднiстю ІІІ групи">
              Особа з iнвалiднiстю ІІІ групи
            </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Соціальний стан (вибрати одну з вказаних позицій):
          <Form.Select
            aria-label="Default select example"
            name="socialStatus"
            value={formData.socialStatus}
            onChange={handleChange}
          >
            <option value="">Не вказано</option>
            <option value="Наукові співробітники ">
              Наукові співробітники{' '}
            </option>
            <option value="Педагогiчнi колективи">Педагогiчнi колективи</option>
            <option value="Вчитель. Вихователь. Викладач">
              Вчитель. Вихователь. Викладач
            </option>
            <option value="Батькiвськi колективи">Батькiвськi колективи</option>
            <option value="Переселенці з зони АТО">
              Переселенці з зони АТО
            </option>
            <option value=" Пенсіонер ">Пенсіонер </option>
            <option value="Служитель релігійної організації">
              Служитель релігійної організації
            </option>
            <option value="Пенсіонер з числа військовослужбовців">
              Пенсіонер з числа військовослужбовців
            </option>
            <option value="Особа, що позбавлена волi: особа, воля якої обмежена">
              Особа, що позбавлена волi: особа, воля якої обмежена
            </option>
            <option value="Журналіст">Журналіст</option>
            <option value="Інші">Інші</option>
            <option value="Пенсіонер">Пенсіонер</option>
            <option value="Робітник">Робітник</option>
            <option value="Селянин">Селянин</option>
            <option value="Працiвник бюджетної сфери">
              Працiвник бюджетної сфери
            </option>
            <option value="Державний службовець">Державний службовець</option>
            <option value="Військовослужбовець">Військовослужбовець</option>
            <option value="Підприємець">Підприємець</option>
            <option value="Безробітний">Безробітний</option>
            <option value="Учень, студент">Учень, студент</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Вид звернення (вибрати одну з вказаних позицій):
          <Form.Select
            aria-label="Default select example"
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
          >
            <option value="">Не вказано</option>
            <option value="Пропозиція (зауваження)">
              Пропозиція (зауваження)
            </option>
            <option value="Заява (клопотання)">Заява (клопотання)</option>
            <option value="Скарга">Скарга</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          За ознакою направлення (вибрати одну з вказаних позицій):
          <Form.Select
            aria-label="Default select example"
            name="directionSign"
            value={formData.directionSign}
            onChange={handleChange}
          >
            <option value="">Не вказано</option>
            <option value="Первинне">Первинне</option>
            <option value="Повторне">Повторне</option>
            <option value="Дублетне ">Дублетне </option>
            <option value="Неодноразове ">Неодноразове </option>
            <option value="Масове">Масове</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Дата направлення:
          <Form.Control
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Зміст звернення:
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Я - не робот:</Form.Label>
          <ReCAPTCHA sitekey="Key" onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Check
            required
            label="Я погоджуюсь на обробку персональних даних"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">Надіслати</Button>
      </Form>
    </section>
  );
};

export default AppealForm;
