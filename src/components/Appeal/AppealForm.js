import React, { useState } from 'react';

const AppealForm = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
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
    // Ваш код для обробки і відправки даних на електронну пошту

    // Приклад виводу даних в консоль
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Прізвище:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        Ім'я:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        По батькові:
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </label>

      <label>
        Стать:
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </label>

      <label>
        Місце проживання:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>

      <label>
        Телефон:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      <label>
        Електронна пошта:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Категорія (вибрати одну з вказаних позицій):
        <select
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
        </select>
      </label>

      <label>
        Соціальний стан (вибрати одну з вказаних позицій):
        <select
          name="socialStatus"
          value={formData.socialStatus}
          onChange={handleChange}
        >
          <option value="">Не вказано</option>
          <option value="Наукові співробітники ">Наукові співробітники </option>
          <option value="Педагогiчнi колективи">Педагогiчнi колективи</option>
          <option value="Вчитель. Вихователь. Викладач">
            Вчитель. Вихователь. Викладач
          </option>
          <option value="Батькiвськi колективи">Батькiвськi колективи</option>
          <option value="Переселенці з зони АТО">Переселенці з зони АТО</option>
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
        </select>
      </label>

      <label>
        Вид звернення (вибрати одну з вказаних позицій):
        <select
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
        </select>
      </label>

      <label>
        За ознакою направлення (вибрати одну з вказаних позицій):
        <select
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
        </select>
      </label>

      <label>
        Дата направлення:
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>

      <label>
        Зміст звернення:
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </label>

      <label>
        Я погоджуюсь на обробку персональних даних:
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
        />
      </label>

      <label>
        Я - не робот:
        <input
          type="checkbox"
          name="isHuman"
          checked={formData.isHuman}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Надіслати</button>
    </form>
  );
};

export default AppealForm;
