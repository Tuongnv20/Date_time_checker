import './App.css';
import React, { useState } from 'react';


function DateTimeChecker() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    const handleClear = (e) => {
        e.preventDefault();
        setDay('');
        setMonth('');
        setYear('');
    }

    const handleCheckDate = () => {
        const parsedDay = parseInt(day);
        const parsedMonth = parseInt(month);
        const parsedYear = parseInt(year);


        if (!day || !month || !year) {
            alert('Please fill all the required fields');
            return;
        }

        if (isNaN(parsedDay)) {
            alert('Input data for Day is INCORRECT format!!!');
            return;
        }

        if (isNaN(parsedMonth)) {
            alert('Input data for Month is INCORRECT format!!!');
            return;
        }
        if (isNaN(parsedYear)) {
            alert('Input data for Year is INCORRECT format!!!');
            return;
        }

        if (parsedDay < 1 || parsedDay > 31) {
            alert('Input data for Day is out of range!!!');
            return;
        }

        if (parsedMonth < 1 || parsedMonth > 12) {
            alert('Input data for Month is out of range!!!');
            return;
        }

        if (parsedYear < 1900 || parsedYear > 2100) {
            alert('Input data for Year is out of range!!!');
            return;
        }

        if (parsedMonth === 2 && parsedDay < 29) {
            if ((parsedYear % 400 === 0)) {
                alert(parsedDay + '/' + parsedMonth + '/' + parsedYear + ' is Leap year!');
            } else if (parsedYear % 100 === 0) {
                alert(parsedDay + '/' + parsedMonth + '/' + parsedYear + ' is NOT Leap year!');
            } else if (parsedYear % 4 === 0) {
                alert(parsedDay + '/' + parsedMonth + '/' + parsedYear + ' is Leap year!');
            } else if ((parsedYear % 400 !== 0 && parsedYear % 4 !== 0 && parsedYear % 100 !== 0)) {
                alert(parsedDay + '/' + parsedMonth + '/' + parsedYear + ' is NOT Leap year!');
            }
        } else if (parsedMonth === 2 && parsedDay > 29) {
            alert(parsedDay + '/' + parsedMonth + '/' + parsedYear + ' is INCORRECT date time');
        } else {
            if (parsedDay > 30 && (parsedMonth === 4 || parsedMonth === 6 || parsedMonth === 9 || parsedMonth === 11)) {
                alert(parsedDay + '/' + parsedMonth + '/' + parsedYear + ' is INCORRECT date time');
            } else {
                alert(parsedDay + '/' + parsedMonth + '/' + parsedYear + ' is CORRECT date time');
            }
        }
    }

    return (
        <div className='form-box'>
            <form className='form'>
                <span className='title'>Date Time Checker</span>
                <div className='form-container'>
                    {/* <label>Day </label> */}
                    <input type='text' placeholder='Day' className='input' value={day} onChange={(e) => setDay(e.target.value)} />
                </div>
                <div className='form-container'>
                    {/* <label>Month</label> */}
                    <input type='text' placeholder='Month' className='input' value={month} onChange={(e) => setMonth(e.target.value)} />
                </div>
                <div className='form-container'>
                    {/* <label>Year</label> */}
                    <input type='text' placeholder='Year' className='input' value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
                <div >
                    <button onClick={handleClear}>Clear</button>
                    <button onClick={handleCheckDate}>Check</button>

                </div>
            </form>
        </div>
    );
}
export default DateTimeChecker;
