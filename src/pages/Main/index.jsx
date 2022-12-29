import React, { useState } from 'react';
import { SITE_PLACEHOLDER } from '@Constants/constants';

import logo from '@Assets/images/logo.png';
import phone_icon from '@Assets/images/phone_icon.png';
import car from '@Assets/images/car.webp';
import blank from '@Assets/images/blank.webp';
import calc_icon from '@Assets/images/calc_icon.png';
import car_icon from '@Assets/images/car_icon.png';
import hand_icon from '@Assets/images/hand_icon.png';
import list_icon from '@Assets/images/list_icon.png';
import data_icon from '@Assets/images/data_icon.png';

import './styles.less';

import Slider from '@Components/Slider/Slider';
import StepsList from '@Components/StepsList/StepsList';
import Popup from '@Components/Popup/Popup';

let slides = [
    {image: car, title: "Срочная доставка день в день", description: "Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений."},
    {image: blank, title: "Подписание договора за 1 час", description: "В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг."}
]

let steps = [
    {image: calc_icon, title: "Расчетать стоимость", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."},
    {image: car_icon, title: "Вызвать курьера", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."},
    {image: hand_icon, title: "Оплатить услуги", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."},
    {image: list_icon, title: "Заключить договор", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."},
    {image: data_icon, title: "Предоставить данные", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."}
]


const Main = function () {
    const [isPopupVisible, setPopupVisibility] = useState(false)

    const showPopup = (e) => {
        setPopupVisibility(true);
        e.stopPropagation();
    };

    return (
        <layout className="page">
            <header className="header"> 
                <div className='page__middle-zone header__middle-zone'>
                    <section className="menu">
                        <div className='menu__left'>
                            <img className="logo-img" src={logo} alt="logo"/>
                            <div className='menu__line hide-when-medium'/>
                            <a href="http://www.google.com" className='menu__text hide-when-medium'>Курьерская служба доставки</a>
                        </div>
                        <div className='menu__right'>
                            <div className='phone-block hide-when-medium'>
                                <img className="phone-block__phone-img" src={phone_icon} alt="phone logo"/>
                                <a href="http://www.google.com" className='menu__text phone-block__text'>8 (909) 023-12-51</a>
                            </div>
                            <button className="login-button" onClick={(e) => showPopup(e)}>Вход</button>
                        </div>
                    </section> 
                    <Slider autoPlay={true} autoPlayTime={7000} allSlides={slides}/>
                </div>
            </header>
            <main className='body page__middle-zone'>
                <div className='body__top'>
                    <p className='body__title'>5 шагов к заявке</p>
                </div>
                <StepsList steps={steps} />
            </main>
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
            <Popup isVisible={isPopupVisible} setSelfVisibility={setPopupVisibility} />
        </layout>
    );
};

export default Main;
