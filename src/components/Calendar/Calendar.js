import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarApp() {
    const [value, onChange] = useState(new Date());
    console.log(value.toDateString())

    return (
        <div>
            <Calendar onChange={onChange} value={value} />
            <div className="text-center">
                Сьогодні: {value.toDateString()}
            </div>
        </div>
    );
}

export default CalendarApp;