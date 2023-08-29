import "../styles/mouseEffect.css"
import { useMouseEffect } from "../hooks/useMouseEffect";

export const MouseEffect = () => {
    const {mouseEffect, actualColor, buttonMouse, changeMouseEffect, changeColor} = useMouseEffect( {colorMouse: "#ff0000"});
    
    return (
        <>
        { mouseEffect && buttonMouse }
        <section className="main-section">            
            <h2>Practice Effects With Mouse position.</h2>
            <button onClick={changeMouseEffect}>
                {mouseEffect ? "Disable" : "Activate"} mouse Effect
            </button>
            <div className="changeColorMouse">
                <label htmlFor="mouse-color">Change Mouse Color</label>
                <input 
                    onChange={(e) => changeColor(e.target.value)}
                    type="color" 
                    id="mouse-color" 
                    value={actualColor}
                />
            </div>
        </section>
        </>
    )
}