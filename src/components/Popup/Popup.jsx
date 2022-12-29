import React from "react";
import { EMAIL_REGEX, SITE_PLACEHOLDER } from "@Constants/constants";

import "./styles.less";

import cross from "@Assets/images/cross.png";

export default function Popup({ isVisible, setSelfVisibility }) {
    const handleClick = (e) => {
        e.stopPropagation();
    };

    if (!isVisible) {
        return null;
    };
    return (
        <aside className="background" onClick={() => setSelfVisibility(false)}>
            <div className="popup" onClick={(e) => handleClick(e)} >
                <div className="popup__middle-zone">
                    <img className="popup__cross" src={cross} alt="cross" onClick={() => setSelfVisibility(false)} />
                    <div className="popup__header">
                        <p className="popup__title">Авторизация</p>
                        <p className="popyp__text">Введите логин и пароль, чтобы войти в личный кабинет</p>
                    </div>
                    <div className="popup__body">
                        <form className="popup__form" action={SITE_PLACEHOLDER}>
                            <input 
                                className="popup__form-element"
                                type="text"
                                name="username"
                                maxlength="15"
                                minlength="4"
                                pattern={EMAIL_REGEX}
                                placeholder="Логин"
                                required/>
                            <input
                                className="popup__form-element"
                                type="password"
                                name="password"
                                minlength="6"
                                placeholder="Пароль"
                                required/>
                            <button className="yellow-button popup__button">Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
    );
}