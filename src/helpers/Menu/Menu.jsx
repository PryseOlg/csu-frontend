import React, {useState} from "react";

import logo from '@Assets/images/logo.png';
import phone_icon from '@Assets/images/phone_icon.png';

import "./styles.less";
import Popup from "@Components/Popup/Popup";
import { SITE_PLACEHOLDER } from "@Constants/constants";

export default function Menu() {
    const [isPopupVisible, setPopupVisibility] = useState(false)

    const showPopup = (e) => {
        setPopupVisibility(true);
        e.stopPropagation();
    };

    return (
        <section className="menu">
            <div className='menu__left'>
                <img className="logo-img" src={logo} alt="logo"/>
                <div className='menu__line hide-when-medium'/>
                <a href={SITE_PLACEHOLDER} className='menu__text hide-when-medium'>Курьерская служба доставки</a>
            </div>
            <div className='menu__right'>
                <div className='phone-block hide-when-medium'>
                    <img className="phone-block__phone-img" src={phone_icon} alt="phone logo"/>
                    <a href={SITE_PLACEHOLDER} className='menu__text phone-block__text'>8 (909) 023-12-51</a>
                </div>
                <div className="login-button" onClick={(e) => showPopup(e)}>Вход</div>
            </div>
            <Popup isVisible={isPopupVisible} setSelfVisibility={setPopupVisibility} />
        </section>
    );
};