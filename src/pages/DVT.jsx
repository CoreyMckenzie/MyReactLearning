import React from 'react'

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
        <p><br/><em> {title} </em> - Is exactly what it says it is. Check the DVT.jsx file.</p>
        <p><br/>{phrase_1} {phrase_2}. More than even { wildNum }!</p>
        <br/>
        <br/>
        <p>Variables can be passed into html attributes using jsx, this <a href={ link }> link</a> is an example. Check DVT.jsx file.</p>


    </div>
  )
}
