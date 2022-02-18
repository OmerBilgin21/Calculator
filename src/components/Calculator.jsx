import React, { useState } from 'react';


const Calculator = () => {

    const [btnVal, setVar] = useState("");

    const del = () => {

        try {
            setVar(btnVal.slice(0,-1))
        } catch (error) {
            setVar("")
        }

    }

    const adder = () =>{
        const arr = btnVal.split("+");
        let result = ( parseInt(arr[0]) + parseInt(arr[1]) ).toString();
        setVar(result);
    }

    const divider = () =>{
        const arr = btnVal.split("/");
        let result = ( parseInt(arr[0]) / parseInt(arr[1]) ).toString();
        setVar(result);
    }

    const substractor = () =>{
        const arr = btnVal.split("-");
        let result = ( parseInt(arr[0]) - parseInt(arr[1]) ).toString();
        setVar(result);
    }

    const multiplier = () =>{
        const arr = btnVal.split("*");
        let result = ( parseInt(arr[0]) * parseInt(arr[1]) ).toString();
        setVar(result);
    }

    const calc = () => {
        ( btnVal.includes("+") ? adder() : console.log("adder false") )
        ( btnVal.includes("+") ? substractor() : console.log("adder false") )
        ( btnVal.includes("+") ? divider() : console.log("adder false") )
        ( btnVal.includes("+") ? multiplier() : console.log("adder false") )
        
    }
    return (
        <section>
            <div className="container">

                <input type="" class="screen" />

                <div className="first">
                    <button className="span-three">c</button>
                    <button className="span-one operator">/</button>
                </div>

                <div className="second">
                    <button className="span-one">7</button>
                    <button className="span-one">8</button>
                    <button className="span-one">9</button>
                    <button className="span-one operator">*</button>
                </div>

                <div className="third">
                    <button className="span-one">4</button>
                    <button className="span-one">5</button>
                    <button className="span-one">6</button>
                    <button className="span-one operator">-</button>
                </div>


                <div className="fourth">
                    <button className="span-one">1</button>
                    <button className="span-one">2</button>
                    <button className="span-one">3</button>
                    <button className="span-one operator">+</button>
                </div>

                <div className="fifth">
                    <button className="span-three">0</button>
                    <button className="span-one operator">=</button>
                </div>

            </div>
        </section>
    );
}

export default Calculator;
