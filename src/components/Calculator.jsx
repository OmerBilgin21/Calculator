import React from 'react';

const Calculator = () => {
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
