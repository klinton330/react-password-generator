import React from 'react'
import { useState } from 'react'

export const PasswordGenerator = () => {
     return(
   <div className="password-generator">
    <h2>Strong Password Generator</h2>
    <div className="input-group">
      <label htmlFor="num">Password Length:</label>
      <input type="number" id="num" />
    </div>
    <div className="checkbox-group">
      <input type="checkbox" id="uppercase" />
      <label htmlFor="uppercase">Include Uppercase Letters</label>
    </div>
     <div className="checkbox-group">
      <input type="checkbox" id="lowercase" />
      <label htmlFor="lowercase">Include Lowercase Letters</label>
    </div>
    <div className="checkbox-group">
      <input type="checkbox" id="numbers" />
      <label htmlFor="numbers">Include Numbers</label>
    </div>
   <div className="checkbox-group">
      <input type="checkbox" id="symbols" />
      <label htmlFor="symbols">Include Symbols</label>
    </div>
    <button className="generate-btn">Generate Password</button>
    <div className="generate-password">
      <input type="text" readOnly />
      <button className="copy-btn">Copy</button>
    </div>

   </div>
  )
};

