import React, { useContext } from "react";
import Slide from "./Slide/Slide";
import { SliderContext } from "../Slider";

import "./styles.less";

export default function SlidesList() {
  const { slideNumber, slides, transitionTime } = useContext(SliderContext);

  return (
    <div 
      className="slide-list"
      style={{ transform: `translateX(-${(slideNumber + 1) * 200}%)`, transition: `transform ${transitionTime}s ease-in-out`}}
      >
      {slides.map((slide, index) => (
        <Slide key={"slide-" + index} data={slide} />
      ))}
    </div>
  );
}