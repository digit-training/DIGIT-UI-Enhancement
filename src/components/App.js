import * as React from 'react';
import "./styles.css";

export default function App({ onChange }) {
  
  return (
    <div className="MicroApp">
      <h1>Survey</h1>
      <h4>Enter name:</h4>
      <input onChange={onChange} type="text" placeholder="Enter your name" />
      <h4>Enter Email:</h4>
      <input type="text" placeholder="Enter your Email..." />
      <h4>Enter profession:</h4>
      <input type="text" placeholder="Enter your profession..." />
    </div>
  );
}