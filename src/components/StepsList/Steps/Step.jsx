import React from "react";
import "./styles.less"

const Step = function ({ image, title, description }) {
    return (
        <div className="step">
            <img className="step__img" src={image} alt={title} />
            <p className="step__title">{title}</p>
            <p className="step__descriprion">{description}</p>
        </div>
    );
}

export default Step;