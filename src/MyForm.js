import React, { useState } from 'react';
import './form.css'
const MyForm = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <>
   
      
   
       <form class="centered-form">
       <h2 class = "text-center">Form</h2>
       <div class="div-element">
       <div class="background-div">
   <div className = "container">
   <div id="sidebar">
    <div class="div-element">
     
       
       
        <input type="number" class="input-box" placeholder="Bill Sl No" />
        </div>
       
     
      <div class="div-element">
        
        <select className="option2" value={selectedOption2} onChange={handleOption2Change}>
          <option value="">Bill type</option>
          <option value="option4">A</option>
          <option value="option5">B</option>
          <option value="option6">C</option>
        </select>
      </div>

<div class="div-element">
     
       
<select className="option33" value={selectedOption1} onChange={handleOption1Change}>
  <option value="option7">Funding Source </option>
  <option value="option8">A</option>
  <option value="option9">B</option>
  <option value="option10">C</option>
</select>

</div>
<div class="div-element">
<select className="option11" value={selectedOption2} onChange={handleOption2Change}>
  <option value="">Bill Category</option>
  <option value="option2Value12">A</option>
  <option value="option2Value13">B</option>
  <option value="option2Value14">C</option>
</select>
</div>
<div class="div-element1">
  
  <input type="number"  placeholder='Bill Net Amount'/>
</div>

</div>
<div id="page-wrap">
<div class="div-element">
  <input type="string" placeholder='Invoice no' />
  
</div>
<div class="div-element">
<label htmlFor="date" class = "date">Invoice Date</label>
<input type="date" placeholder='Invoice date'/>
</div>
<div class="div-element">
  <label htmlFor="date" class = "date">Entry Date</label>
  <input type="date" placeholder='entry date' />
  
</div>
<div class="div-element">
<input type="number" placeholder='Base Amount'/>
</div>

</div>
<div class="bottom-div">
<div class="div-element">
<p><b>Is Valid:</b></p>
<input type="radio" name="preferred" value='1' /> Yes<br />
<input type="radio" name="preferred" value='0' /> No<br />
</div>
<div class="div-element" >
<p><b>Remarks</b></p>
<textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
</div>
</div>
</div>
</div>
</div>
</form>

  </>
  );
};

export default MyForm;
