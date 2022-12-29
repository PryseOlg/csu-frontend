import React from "react";
import "./styles.less"

import Step from "./Steps/Step"

const StepsList = function ({ steps }) {
    const renderSteps = () => {
        const _steps = [];
        steps.forEach(step => {
            _steps.push(<Step image={step.image} title={step.title} description={step.description} />)
        })

        return _steps;
    };

    return (
        <section className="steps-list">
            {renderSteps()}
        </section>
    );
}

export default StepsList;