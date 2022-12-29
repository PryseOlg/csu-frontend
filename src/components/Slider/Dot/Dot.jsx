import React, { useContext } from "react";
import { SliderContext } from "../Slider";

import "./styles.less";

export default function Dot({ number }) {
  const { setSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={`dot ${slideNumber === number ? "dot_selected" : ""}`}
      onClick={() => setSlide(number)}
    />
  );
}