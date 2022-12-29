import React from "react";
import "./styles.less"

import Step from "./Steps/Step"

const StepsList = function ({ steps }) {
    const renderSteps = () => {
        const _steps = [];
        steps.map((step, index) => {
            _steps.push(<Step key={"step-" + index} image={step.image} title={step.title} description={step.description} />)
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