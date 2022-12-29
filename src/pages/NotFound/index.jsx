import React from "react"

import './styles.less';

import cat from "@Assets/images/cat.jpg";

const NotFound = () => (
    <main className="cat-holder">
        <img className="cat-img" src={cat} alt="cat" />
        <p className="description">страница не найдена</p>
        <p className="title">А что это мы тут делаем?</p>
    </main>
);

export default NotFound;