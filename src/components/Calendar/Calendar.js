import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarApp() {
    const [value, onChange] = useState(new Date());
    // console.log({ onChange })


    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
}

export default CalendarApp;
