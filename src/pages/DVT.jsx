import React from 'react';
import eg1 from "./Photos/dvt/dvt_eg_1.png";
import eg2 from "./Photos/dvt/dvt_eg_2.png";
import eg3 from "./Photos/dvt/dvt_eg_3.png";


//https://www.youtube.com/watch?v=0sSYmRImgRY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=5

export default function DVT() {
    const title = 'I am a variable.'; 
    const phrase_1 = 'You can use as many';
    const phrase_2 = 'Variables as you want, check DVT.jsx file for more';
    const wildNum = 5000;
    const link = 'http://www.google.com';

  return (
    <div className="container">
        <h1>Dynamic Values in Templates</h1>
        
        <p><br/>You can output variable data into html using React. React automatically turns all variable data into string data types, so that it can be outputted into html. All data types except classes.</p>
        
        <p><br /><em> {title} </em> - Is exactly what it says it is. Check the DVT.jsx file. <img src={eg1} alt=""/></p>
        
        
        
      <p><br />{phrase_1} {phrase_2}. More than even {wildNum}! <img src={eg2} alt="" /> <img src={eg3} alt="" /></p>

        <br/>
        <br/>
        <p>Variables can be passed into html attributes using jsx, this <a href={ link }> link</a> is an example. Check DVT.jsx file. </p>
    </div>
  )
}
