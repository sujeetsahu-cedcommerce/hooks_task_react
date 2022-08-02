import React, { useState } from 'react'
import { useContext } from 'react'
import { ContextData } from './App'
import './Currency.json';
const data = require("./Currency.json")
function CurrencyConverterUseContext() {
    let currency =  data.currency[0];
    console.log(currency);
    const [left,set_left,right,set_Right] = useContext(ContextData);
    const [amount,setAmount] = useState(0);
    const [left__country_amount,set_left_amount] = useState(0);
    const [right_country_amount,set_right_amount] = useState(0);
    const [result,setResult] = useState('');

    const left_country = (event) => {
        let key =event.target.value;
        set_left(key);
        set_left_amount(currency[key])
    }
    
    const right_country = (event) => {
        let key = event.target.value;
        set_Right(key);
        set_right_amount(currency[key]);
    }

    const Get_Exchange_Rate = (event) => {
        let result = (right_country_amount*amount)/left__country_amount;
        setResult(result);
        if(amount && left && right){
            document.getElementById("result_container").style.visibility="visible";
        }
    }

    return (
        <div className='container'>
           <div className='adjust_size_container'>
           <div>
                <input type="number" placeholder="enter amount" onChange={(event) => setAmount(event.target.value)} style={{height:"7vh"}} />
            </div>
            <div className='main_container'>
                <div className='option_container'>
                    <select style={{height:"7vh"}} onChange={left_country}>
                    <option selected disabled>Select country</option>
                        {   
                            Object.keys(currency).map((key) => (
                                <option>{key}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <div><i class="fa-solid fa-arrow-right-long"></i></div>
                    <div><i class="fa-solid fa-arrow-left-long"></i></div>
                </div>
                <div className='option_container'>
                    <select style={{height:"7vh",outline:"none"}} onChange={right_country}>
                    <option selected disabled>Select country</option>

                        {
                            Object.keys(currency).map((key) => (
                                <option >{key}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div>
                <h4 id="result_container" style={{marginBottom:"4px",visibility:"hidden"}}>{amount} {left}  =  {result} {right}</h4>
            </div>
            <div>
                  <button onClick={Get_Exchange_Rate} style={{height:"6vh"}} >Get Exchange Rate</button>
            </div>
           </div>
        </div> 
      );
}

export default CurrencyConverterUseContext