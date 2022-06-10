import React, { Component } from 'react';
import api from '../../services/WeatherApi';
import s from './Weather.module.css';

class Weather extends Component {
    state = {
        search: "Почаїв",
        data: "",
    };
    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState) {
        const { search } = this.state;
        if (prevState.search !== search) {
            this.getData();
        }
    }

    getData = () => {
        const { search } = this.state;
        api.getFetch(search).then((d) => {
            this.setState({ data: d });
        });
    };

    handleSumbit = (e) => {
        e.preventDefault();
        // console.log("form", e.target.elements.search);
        this.setState({ search: e.target.elements.search.value });
        e.target.elements.search.value = "";
    };

    render() {
        const { handleChange, handleSumbit } = this;
        const { data, search } = this.state;
        const { name, main, weather, wind } = data;
        console.log("main", main);
        console.log("weather", weather);

        return (
            <>
                {data && (
                    <div className={s.card}>
                        <form className={s.search} onSubmit={handleSumbit}>
                            <input
                                type="text"
                                className={s.searchBar}
                                placeholder="Пошук"
                                onChange={handleChange}
                                name="search"
                            // value={search}
                            />
                            <h4 className={s.city}>{name}</h4>
                        </form>
                        <div className={s.weather}>
                            <h1 className={s.temp}>{Math.round(main.temp)}°C</h1>
                            <ul className={s.flex}>
                                {weather.map((el) => {
                                    console.log(el);
                                    const { icon } = el;
                                    return (
                                        <li key={el.id} className={s.box}>
                                            <img
                                                src={`https://openweathermap.org/img/wn/${icon}.png`}
                                                alt="icon"
                                                width="60px"
                                                className={s.icon}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                            <p className={s.humidity}>Вологість повітря: {main.humidity}%</p>
                            <p className={s.wind}>Швидкість вітру: {wind.speed} м/c</p>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default Weather;