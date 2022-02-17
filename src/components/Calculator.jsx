import React from 'react';

const Calculator = () => {
    return (
        <section>
            <div className="container">

                

                <input type="" class="screen" />


                    <div className="first">
                        <button class="span-three">c</button>
                        <button>/</button>
                    </div>

                    <div className="second">
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button className='operator'>*</button>
                    </div>

                    <div className="third">
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button className='operator'>-</button>
                    </div>


                    <div className="fourth">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button className='operator'>+</button>
                    </div>

                    <div className="fifth">
                        <button class="span-three">0</button>
                        <button>=</button>
                    </div>
                



            </div>
        </section>
    );
}

export default Calculator;
