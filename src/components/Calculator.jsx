import React, { useState } from 'react';


const Calculator = () => {

    const [btnVal, setVar] = useState("");

    const del = () => {

        try {
            setVar(btnVal.slice(0, -1))
        } catch (error) {
            setVar("")
        }

    }

    const adder = () => {
        const arr = btnVal.split("+");
        let result = (parseInt(arr[0]) + parseInt(arr[1])).toString();
        setVar(result);
    }

    const divider = () => {
        const arr = btnVal.split("/");
        let result = (parseInt(arr[0]) / parseInt(arr[1])).toString();
        setVar(result);
    }

    const substractor = () => {
        const arr = btnVal.split("-");
        let result = (parseInt(arr[0]) - parseInt(arr[1])).toString();
        setVar(result);
    }

    const multiplier = () => {
        const arr = btnVal.split("*");
        let result = (parseInt(arr[0]) * parseInt(arr[1])).toString();
        setVar(result);
    }

    const calc = () => {;
        (btnVal.includes("+") ? adder() : console.log("adder false"));
        (btnVal.includes("-") ? substractor() : console.log("substractor false"));
        (btnVal.includes("/") ? divider() : console.log("divider false"));
        (btnVal.includes("*") ? multiplier() : console.log("multiplier false"));

    }
    return (
        <section>
            <div className="container">

                <input type="" class="screen" readOnly value={btnVal} onChange={(e) => setVar(e.target.value)} />

                <div className="first">
                    <button className="span-three" onClick={() => del()} >c</button>
                    <button className="span-one operator" value="/" onClick={(e) => setVar(btnVal + e.target.value)}  >
                        /
                    </button>
                </div>

                <div className="second">
                    <button className="span-one" value="7" onClick={(e) => setVar(btnVal + e.target.value)}>7</button>
                    <button className="span-one" value="8" onClick={(e) => setVar(btnVal + e.target.value)}>8</button>
                    <button className="span-one" value="9" onClick={(e) => setVar(btnVal + e.target.value)}>9</button>
                    <button className="span-one operator" value="*" onClick={(e) => setVar(btnVal + e.target.value)}>*</button>
                </div>

                <div className="third">
                    <button className="span-one" value="4" onClick={(e) => setVar(btnVal + e.target.value)}>4</button>
                    <button className="span-one" value="5" onClick={(e) => setVar(btnVal + e.target.value)}>5</button>
                    <button className="span-one" value="6" onClick={(e) => setVar(btnVal + e.target.value)}>6</button>
                    <button className="span-one operator" value="-" onClick={(e) => setVar(btnVal + e.target.value)}>-</button>
                </div>


                <div className="fourth">
                    <button className="span-one" value="1" onClick={(e) => setVar(btnVal + e.target.value)}>1</button>
                    <button className="span-one" value="2" onClick={(e) => setVar(btnVal + e.target.value)}>2</button>
                    <button className="span-one" value="3" onClick={(e) => setVar(btnVal + e.target.value)}>3</button>
                    <button className="span-one operator" value="+" onClick={(e) => setVar(btnVal + e.target.value)}>+</button>
                </div>

                <div className="fifth">
                    <button className="span-three" value="0" onClick={(e) => setVar(btnVal + e.target.value)}>0</button>
                    <button className="span-one operator" value="=" onClick={() => calc()} >=</button>
                </div>

            </div>
        </section>
    );
}

export default Calculator;
