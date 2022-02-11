import React from 'react';
// import React, { useState } from 'react';

export default function About(props) {
  
//   const [myStyle, setMyStyle] = useState({
//     color:'black',
//     backgroundColor: 'white'
// }); 
let myStyle = {
    color: props.mode === 'dark'?'white':'grey',
    backgroundColor:props.mode === 'dark'?'grey':'white',
    border:'2 px solid',
    corderCoror:props.mode === 'dark'?'white':'grey'
}


// const [btnText, setBtnText] = useState("Enable Dark Mode");

// const toggleStyle = () =>{
//     if(myStyle.color === 'white'){
//         setMyStyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         setBtnText("Enable Dark Mode")
//     }
//     else
//     {
//         setMyStyle({
//             color:'white',
//             backgroundColor:'black',
//             border: "1px solid white"
//         })
//         setBtnText("Enable Light Mode")
//     }
// }
    
  return <div className="container" style = {{color: props.mode === 'dark'?'white':'grey'}}>
    <h1 className="my-2">About Us</h1>
    <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong> Analyse your text </strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
              textUtils gives you a way to analyse your text quickly and effeciently. Be it word count, character count.   
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong> Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
                TextUtils is a free character counter tool that provides instant character count
                and word count statistics for a given text. TextUtils reports the number of words and character
                Thus its is suitable for writing text with word/character limit.       
           </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
              This word counter software works in any web browsers such as chrome, firefox,
              Internet Explorer etc.It suits to count character in facebook, blog, books, excel documents, pdf
              document, essays etc.    
            </div>
            </div>
        </div>
    </div>
    
  </div>;
}


// working:
// making a site in which we can enable dark mode and light mode
