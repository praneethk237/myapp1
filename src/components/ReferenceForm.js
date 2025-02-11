import React, { useState } from 'react';
import { DOMAIN_OPTIONS,CONTEXT_OPTIONS } from '../constants';
import axiosInstance from '../axios/axiosInstance';



const Form1 = () => {
  // State variables for the input values
  const [textValue, setTextValue] = useState('');
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [data,setData] = useState('');

  // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Text:', textValue);
      console.log('Dropdown 1:', dropdown1Value);
      console.log('Dropdown 2:', dropdown2Value);
      event.preventDefault();

      axiosInstance.get(`/getDataReference?id=${textValue}&context=${dropdown1Value}&domain=${dropdown2Value}`)
      .then((response) => {
        setData(response.data);  // Assuming the response contains the data you need
        console.log('Response Data:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      
      //axios.get('http://localhost:8080')

    };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Reference</h1>  
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="textBox">id</label>
          <input
            type="text"
            id="textBox"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="dropdown1">Context</label>
          <select
            id="dropdown1"
            value={dropdown1Value}
            onChange={(e) => setDropdown1Value(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="">Select an option</option>
            {CONTEXT_OPTIONS.map((option) => (
                <option key = {option.value} value = {option.value}>
                {option.label}
                </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="dropdown2">Domain:</label>
          <select
            id="dropdown2"
            value={dropdown2Value}
            onChange={(e) => setDropdown2Value(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="">Select an option</option>
            {DOMAIN_OPTIONS.map((option) => (
                <option key = {option.value} value = {option.value}>
                    {option.label}
                </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>

        <div>
          <h1>{data}</h1>
        </div>
      </form>
    </div>
  );
};

export default Form1;

