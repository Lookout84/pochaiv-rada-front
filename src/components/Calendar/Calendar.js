import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import s from './Calendar.module.css';

function CalendarApp() {
    const [value, onChange] = useState(new Date());
    // console.log({ onChange })


    return (
        <div>
            <h2 className={s.title}>Календар</h2>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
}

export default CalendarApp;
