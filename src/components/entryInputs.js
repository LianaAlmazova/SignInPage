import React, { useState } from 'react';
import "../styles/entryInputs.css";
import "../styles/tooltip.css";
import icon_v from '../images/icon_v.png';
import icon_x from '../images/icon_x.png';

export const EntryInputs = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleUserInput = (e) => setUser(e.target.value);
    const handlePasswordInput = (e) => setPassword(e.target.value);

    //для tooltip
    const valid = (v_icon, inv_icon) => {
        let valid_icon = document.getElementById(v_icon);
        valid_icon.style.visibility = "visible";

        let invalid_icon = document.getElementById(inv_icon);
        invalid_icon.style.visibility = "hidden";
    }

    const invalid = (v_icon, inv_icon) => {
        let valid_icon = document.getElementById(v_icon);
        valid_icon.style.visibility = "hidden";

        let invalid_icon = document.getElementById(inv_icon);
        invalid_icon.style.visibility = 'visible';
    }

    const notDisplay = (v_icon, inv_icon) => {
        let valid_icon = document.getElementById(v_icon);
        valid_icon.style.visibility = "hidden";
        let invalid_icon = document.getElementById(inv_icon);
        invalid_icon.style.visibility = 'hidden';
    }

    let tooltipDisplay = document.getElementById("tooltip_container");
    console.log(tooltipDisplay);

    const tooltipBlur = (event) => {
        notDisplay("pass_tick_len", "pass_cross_len");
        notDisplay("pass_tick_up", "pass_cross_up");
        notDisplay("pass_tick_num", "pass_cross_num");
        notDisplay("pass_tick_space", "pass_cross_space");
        tooltipDisplay.style.visibility = "hidden";
    }

    const handleInput = (e) => {
        tooltipDisplay.style.visibility = "visible";
        let text = document.getElementsByTagName("input")[1];
        let pass = text.value;

        if (pass.length >= 8) {
            valid("pass_tick_len", "pass_cross_len");
        } else {
            invalid("pass_tick_len", "pass_cross_len");
        }

        const up = /[A-Z]/g;
        if (up.test(pass)) {
            valid("pass_tick_up", "pass_cross_up");
        } else {
            invalid("pass_tick_up", "pass_cross_up");
        }

        const num = /[0-9]/g;
        if (num.test(pass)) {
            valid("pass_tick_num", "pass_cross_num");
        } else {
            invalid("pass_tick_num", "pass_cross_num");
        }

        const space = /[ ]/g;
        if (!space.test(pass)) {
            valid("pass_tick_space", "pass_cross_space");
        } else {
            invalid("pass_tick_space", "pass_cross_space");
        }
    };

    return (
        <div>
            <div className={`form-control ${password && "tooltipOn"}`}>
                <div id="tooltip_container" className="tooltip">
                    <div className="tooltiptext">
                        <div className="tooltip_row">
                            <div className="icon_container">
                                <img src={icon_v} alt="icon tick" id="pass_tick_len" className="icon icon_tick" />
                                <img src={icon_x} alt="icon cross" id="pass_cross_len" className="icon icon_cross" />
                            </div>
                            <p>не менее 8 символов</p>
                        </div>
                        <div className="tooltip_row">
                            <div className="icon_container">
                                <img src={icon_v} alt="icon tick" id="pass_tick_up" className="icon icon_tick" />
                                <img src={icon_x} alt="icon cross" id="pass_cross_up" className="icon icon_cross" />
                            </div>
                            <p>заглавные буквы</p>
                        </div>
                        <div className="tooltip_row">
                            <div className="icon_container">
                                <img src={icon_v} alt="icon tick" id="pass_tick_num" className="icon icon_tick icon_ticknum" />
                                <img src={icon_x} alt="icon cross" id="pass_cross_num" className="icon icon_cross" />
                            </div>
                            <p>минимум 1 цифра</p>
                        </div>
                        <div className="tooltip_row">
                            <div className="icon_container">
                                <img src={icon_v} alt="icon tick" id="pass_tick_space" className="icon icon_tick" />
                                <img src={icon_x} alt="icon cross" id="pass_cross_space" className="icon icon_cross" />
                            </div>
                            <p>нельзя использовать пробел</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="inputs_container">
                <div className="inputs">
                    <div>
                        <div className="title_login">
                            LOGIN
                        </div>
                        <div className="inputs__box">
                            <input
                                className="inputs__cell login"
                                type="text"
                                placeholder="login"
                                name="login"
                                value={user}
                                onInput={handleUserInput}

                            />
                        </div>
                        {/* {errors.login && <p className="error">{errors.login}</p>} */}
                    </div>
                    <div>
                        <div className="title_password">
                            PASSWORD
                        </div>
                        <div className="inputs__box">
                            <input
                                className="inputs__cell password"
                                type="password"
                                placeholder="password"
                                name="password"
                                value={password}
                                onChange={handleInput}
                                onInput={handlePasswordInput}
                                onBlur={tooltipBlur}
                            />
                        </div>
                    </div>
                </div>
                <div className="button__container">
                    <button className={`button__log form-control ${(user && password) && "button_valid"}`}>
                        <p id="button__text" className="button__text">Войти</p>
                    </button>
                </div>
            </div>
        </div>

    );
};