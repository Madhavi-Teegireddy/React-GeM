import React, { useState } from 'react';
import "./card.css";
import { useNavigate } from 'react-router-dom';

const initialState = {
    name: '',
    number: '',
    month: '',
    year: '',
    cvv: ''
}

const CreditCard = () => {
    const [form, setForm] = useState(initialState);
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
        // console.log(form)
    }

    const hadleSubmit = (e) => {
        e.preventDefault();
        // if(form.name === "" || form.number === "" || form.month === "" || form.year === ""){
        //     alert('pls enter all fields')
        // }else{
        //     setForm({})
        // navigate("/otp")
        // } 
        if (!form.name) {
            alert('Please enter a name');
            return;
        }

        if (!form.number ||  form.number.length !== 8) {
            alert('Please enter an account number');
            return;
        }

        if (!form.month || form.month === 'month' || !form.year || form.year === 'year') {
            alert('Please select a valid month and year');
            return;
        }

        if (!form.cvv || form.cvv.length !== 3 ) {
            alert('Please enter a valid CVV (3 digits)');
            return;
        }else{
            setForm({})
            navigate("/otp")
        }
    }

    const handleCVVMouseOver = () => {
        setIsFlipped(true);
    }

    const handleCVVMouseLeave = () => {
        setIsFlipped(false);
    }

  return (
    <div style={{display:"flex", flexDirection:"row-reverse", gap:"30px"}}>
        <div style={{width:"50%", border: "1px solid red"}}>
        <form onSubmit={hadleSubmit}>
        <input type="text" placeholder='enter Name' name="name" value={form.name} onChange={handleChange}/>
        <input type="" name="number" placeholder='account number' maxLength="8" value={form.number} onChange={handleChange}/>

        <select name="month" value={form.month} onChange={handleChange}>
           <option value="month" selected disabled>month</option>           
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>

        <select name="year" value={form.year} onChange={handleChange}>
            <option value="year" selected disabled>year</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
            <option value="2032">2032</option>
            <option value="2033">2033</option>
            <option value="2034">2034</option>
            <option value="2035">2035</option>
        </select>

        <div 
        onMouseOver={handleCVVMouseOver} onMouseLeave={handleCVVMouseLeave}>
        <input type="" name="cvv" placeholder='cvv' maxLength="3" value={form.cvv} onChange={handleChange} />
        </div>

        <input type="number" placeholder='enter amout'/>

        <input type="submit"/>
        </form>
        </div>

        <div style={{width:"50%", border: "1px solid pink"}} className={`cvv-display ${isFlipped ?'flipped' : ''}`}>                   
            <p>Name: {form.name}</p>
            <p >Acnt Num: {form.number} </p>
            <p>year: {form.month}/{form.year}</p>
            <p>Cvv: {form.cvv}</p>            
            </div>

    </div>
  )
}

export default CreditCard;
