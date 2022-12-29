import React, { useState } from 'react';

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
import Menu from '@Helpers/Menu/Menu';
import Footer from '@Helpers/Footer/Footer';

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

const Main = () => (
    <div className="page">
        <header className="header"> 
            <div className='page__middle-zone header__middle-zone'>
                <Menu />
                <Slider autoPlay={true} autoPlayTime={7000} allSlides={slides}/>
            </div>
        </header>
        <main className='body page__middle-zone'>
            <div className='body__top'>
                <p className='body__title'>5 шагов к заявке</p>
            </div>
            <StepsList steps={steps} />
        </main>
        <Footer />
    </div>
);


export default Main;
