import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';

const AppealForm = ({
  categories,
  socialsStatus,
  requestTypes,
  directionSigns,
  genders,
}) => {
  console.log(categories);
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
            {genders.map(gender => (
              <option key={gender.id} value={gender.value}>
                {gender.value}
              </option>
            ))}
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
            {categories.map(category => (
              <option key={category.id} value={category.value}>
                {category.value}
              </option>
            ))}
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
            {socialsStatus.map(status => (
              <option key={status.id} value={status.value}>
                {status.value}
              </option>
            ))}
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
            {requestTypes.map(requestType => (
              <option key={requestType.id} value={requestType.value}>
                {requestType.value}
              </option>
            ))}
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
            {directionSigns.map(directionSign => (
              <option key={directionSign.id} value={directionSign.value}>
                {directionSign.value}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          Дата направлення:
          <Form.Control
            type="date"
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

        <Button className="mb-3" type="submit">
          Надіслати
        </Button>
      </Form>
    </section>
  );
};

export default AppealForm;
