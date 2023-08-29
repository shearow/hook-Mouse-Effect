import { useState, useEffect } from "react";

export const useMouseEffect = ( {mouseOn=true, colorMouse="#050505"} ) => {
    const [mouseEffect, setMouseEffect] = useState(mouseOn);
    const [positionMouse, setPoisitonMouse] = useState( {x: -100, y: -100} );
    const [actualColor, setActualColor] = useState(colorMouse);

    useEffect(() => {
        const changeEffect = (e) => {
            const {clientX, clientY} = e;
            setPoisitonMouse({ x: clientX, y: clientY});
        }        
        if(mouseEffect) window.addEventListener("pointermove", changeEffect);

        return () => {
            window.removeEventListener("pointermove", changeEffect);
        }
    }, [mouseEffect]);

    const changeMouseEffect = () => {
        setMouseEffect(prevState => !prevState)
    }

    const changeColor = (newColor) => {
        setActualColor(newColor);
    }

    return {
        mouseEffect,
        actualColor,
        changeMouseEffect,
        changeColor,
        buttonMouse: (
            <div
            className="button-effect" 
            style={{
                backgroundColor: actualColor,
                position: "absolute",
                opacity: .6,
                top: "-2.5rem",
                left: "-2.5rem",
                width: "5rem",
                height: "5rem",
                borderRadius: "50%",
                pointerEvents: "none",
                transform: `translate(${positionMouse.x}px, ${positionMouse.y}px)`
            }}>
            </div>            
        )
    }
}