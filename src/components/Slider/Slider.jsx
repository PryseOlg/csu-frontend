import React, { useEffect, useState, createContext } from "react";
import Dot from "./Dot/Dot";
import SlidesList from "./SlidesList/SlidesList";

import "./styles.less";

export const SliderContext = createContext();

const Slider = function ({autoPlay, autoPlayTime, allSlides }) {
    const [slides, setSlides] = useState([]);
    const [slideNumber, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)
    const [transitionTime, setTransitionTime] = useState(0.5)
    const slidesCount = allSlides.length

    useEffect(() => {
        let extraItems = allSlides.slice()
        extraItems.unshift(allSlides[allSlides.length-1])
        extraItems.push(allSlides[0])
        const loadData = async () => {
            setSlides(extraItems);
        };
        loadData();
    }, []);

    const changeSlide = (direction = 1) => {
        if (slideNumber + direction == slidesCount) {
            setTransitionTime(0)
            setSlide(-1);
            setTimeout(() => {
                setTransitionTime(0.5)
                setSlide(0);
            }, 3);
        } else if (slideNumber + direction == -1) {
            setTransitionTime(0)
            setSlide(slidesCount);
            setTimeout(() => {
                setTransitionTime(0.5)
                setSlide(slidesCount-1);
            }, 1);
        } else {
            setSlide(slideNumber + direction);
        }
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }

    useEffect(() => {
        if (!autoPlay) return;

        const timeout = setTimeout(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearTimeout(timeout);
        };
    }, [slidesCount, slideNumber]);

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < slidesCount; i++) {
            dots.push(<Dot key={"dot-" + i} number={i} />);
        }

        return dots;
    };

    return (
        <div
            className="slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}>
            <SliderContext.Provider
                value={{
                    setSlide,
                    slideNumber: slideNumber,
                    slides: slides,
                    transitionTime: transitionTime
                }}>
                <SlidesList />
                <div className="slider__dots">{renderDots()}</div>
            </SliderContext.Provider>
        </div>
    );
};

export default Slider;