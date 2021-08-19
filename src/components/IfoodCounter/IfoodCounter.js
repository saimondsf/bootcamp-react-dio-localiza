import React, {useState, useEffect} from 'react';
import './IfoodCounter.css'

function IfoodCounter() {
    
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")

    useEffect(()=>{
        document.getElementById("moeda").innerHTML = 2 * value
    },[value])
    
    useEffect(()=>{
        console.log(`o estilo do botão é : ${buttonStyle}`)
    },[buttonStyle])

    function down() {
        if(value > 0){
            setValue(value - 1);
        }

        if(value <= 1){
            setButtonStyle("counter-button-minus-desactive");
        }
    }

    function up() {
        setValue(value + 1);
        setButtonStyle("counter-button-minus-active");
    }

    return (
        <div className="countex-wrapper">
            <button
                className={buttonStyle}
                onClick={down}
            >
                -
            </button>
            <h4>{value}</h4>
            <button
                className="counter-button-plus-active"
                onClick={up}
            >
                +
            </button>
            <button
                id="moeda"
            >
               12,00 
            </button>
        </div>
    )
}

export default IfoodCounter;