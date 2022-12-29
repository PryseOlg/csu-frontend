import React from "react";
import { SITE_PLACEHOLDER } from '@Constants/constants';

import logo from '@Assets/images/logo.png';

import "./styles.less";

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='page__middle-zone footer__middle-zone'>
                <img className='logo-img' src={logo} alt="logo"/>
                <div className='about'>
                    <div className='about__list'>
                        <a href={SITE_PLACEHOLDER}>О компании</a>
                        <a href={SITE_PLACEHOLDER}>Вакнсии</a>
                        <a href={SITE_PLACEHOLDER}>Клиенту</a>
                        <a href={SITE_PLACEHOLDER}>Франчайзинг</a>
                    </div>
                    <div className='about__list'>
                        <a href={SITE_PLACEHOLDER}>Доставка из Китая</a>
                        <a href={SITE_PLACEHOLDER}>Все услуги</a>
                        <a href={SITE_PLACEHOLDER}>Акции</a>
                    </div>
                </div>
                <div className='contacts'>
                    <p>manager@uexpress.ru</p>
                    <p>115221, г. Челябинск, ул. Северная, д. 29-в</p>
                    <p>Мы работаем по 24 часа 5 дней в неделю</p>
                </div>
            </div>
        </footer>
    );
};