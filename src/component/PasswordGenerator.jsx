import React from 'react'
import { useState } from 'react'

export const PasswordGenerator = () => {
  const[length,setLength]= useState(8)
  const[inclueUppercase,setIncludeUppercase]=useState(true);
  const[includeLowercase,setIncludeLowercase]=useState(true);
  const[includeNumbers,setIncludeNumbers]=useState(true)
  const[includeSymbols,setIncludeSymbols]=useState(true)
  const[password,setPassword]=useState("")

  const generatePassword=()=>{
    let charSet="";
    if(inclueUppercase)charSet+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(includeLowercase)charSet+="abcdefghijklmnopqrstuvwxyz"
    if(includeNumbers)charSet+= "0123456789"
    if(includeSymbols)charSet+= "~!@#$%^&*()_+{}|:<>?"
    let generatePassword = ""
    for(let i=0;i<length; i++){
      const randomIndex= Math.floor(Math.random()*charSet.length)
      generatePassword+= charSet[randomIndex]
      setPassword(generatePassword)
    }
  }

  const copyToClipboard=()=>{
     navigator.clipboard.writeText(password)
     alert(password)
  }
     return(
   <div className="password-generator">
    <h2>Strong Password Generator</h2>
    <div className="input-group">
      <label htmlFor="num">Password Length:</label>
      <input type="number" id="num" min="1" value={length}
      onChange={(e)=>parseInt(e.target.value)}/>
    </div>
    <div className="checkbox-group">
      <input type="checkbox" id="uppercase" checked={inclueUppercase} 
      onChange={(e)=>setIncludeUppercase(e.target.checked)}
      />
      <label htmlFor="uppercase">Include Uppercase Letters</label>
    </div>
     <div className="checkbox-group">
      <input type="checkbox" id="lowercase" checked={includeLowercase} 
      onChange={(e)=>setIncludeLowercase(e.target.checked)}/>
      <label htmlFor="lowercase">Include Lowercase Letters</label>
    </div>
    <div className="checkbox-group">
      <input type="checkbox" id="numbers" checked= {includeNumbers} 
      onChange={(e)=>setIncludeNumbers(e.target.checked)}/>
      <label htmlFor="numbers">Include Numbers</label>
    </div>
   <div className="checkbox-group">
      <input type="checkbox" id="symbols" checked={includeSymbols} 
      onChange={(e)=>setIncludeSymbols(e.target.checked)}/>
      <label htmlFor="symbols">Include Symbols</label>
    </div>
    <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
    <div className="generate-password">
      <input type="text" readOnly value={password}/>
      <button className="copy-btn" onClick={copyToClipboard} >Copy</button>
    </div>
<p className="copyright">
        Designed and Developed by <span>Velachi</span>
      </p>
   </div>
  )
};

