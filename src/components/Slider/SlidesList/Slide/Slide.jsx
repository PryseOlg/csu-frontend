import React from "react";
import { SITE_PLACEHOLDER } from "@Constants/constants";

import "./styles.less";

export default function Slide({ data }) {
  return (
    <div className="slide">
      <div className='slide__left'>
          <p className='slide__title'>{data.title}</p>
          <p className='slide__description'>{data.description}</p>
          <a href={SITE_PLACEHOLDER}>
            <button className="yellow-button slide__button">Заказать доставку</button>
          </a>
      </div>
      <div className='slide__right'>
          <img className="slide__img" src={data.image}/>
      </div>
    </div>
  );
}