import React, {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success");
  }

  const handlelowClick = ()=>{
    //console.log("Uppercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
    //this function will handle low click event but it is only called by user.
  }

  const handleOnChange = (event)=>{
    //console.log("On change");
    //this function will handle on change event 

    setText(event.target.value);
  }

  const handlepuncClick = ()=>{
    //console.log("Uppercase was clicked"+text);
    let newText1 = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
    let newText = newText1.replace(/\s{2,}/g," ");
    setText(newText)
    props.showAlert("Punctuation and Extra spaces Removed","success");
    //this function will handle low click event but it is only called by user.
  }

  const handleclearclick = ()=>{
    let text1=text.replace(text,"");
    setText(text1)
    props.showAlert("Textarea is cleared","success");
    
  }
  const handleitalicclick = ()=> {
    document.getElementById("myBox").style.fontStyle="italic";
    //let text1=text.replace(text,text);
    setText(text)
    props.showAlert("Your Text is italic now","success");
  }

  const handlenormalclick = ()=> {
    document.getElementById("myBox").style.fontStyle="normal";
    document.getElementById("myBox").style.fontWeight="normal";
    setText(text)
    props.showAlert("Your Text is now normal","success");
  }

  const handleBoldclick = ()=> {
    document.getElementById("myBox").style.fontWeight="Bolder";
    setText(text)
    props.showAlert("Your text is now bold","success");
  }

  {/*const handleautopuncclick = ()=> {
    alert("still working on it");
  }*/}

  {/*const handleautocomp = ()=> {
    if(text==="my name is");
  }*/}

  const [text, setText] = useState('');
  // text = "new text"; //Wrong way to change the state
  // setText("new text"); //Correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handlelowClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handlepuncClick}>Remove Punctuations and Extra Spaces</button>
        <button className='btn btn-primary mx-1' onClick={handleclearclick}>clear</button>
        <button className='btn btn-primary mx-1' onClick={handleitalicclick}><i>Italic Font</i></button>
        <button className='btn btn-primary mx-1' onClick={handlenormalclick}>Normal Font</button>
        <button className='btn btn-primary mx-1' onClick={handleBoldclick}><b>Bold Font</b></button>
        {/*<button className='btn btn-primary mx-1' onClick={handleautopuncclick}>Auto punctuation</button>*/}
        {/*<button className='btn btn-primary mx-1' onClick={handleautocomp}>Auto complete</button>*/}
        
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Your Text to preview"}</p>
    </div>
    </>
  )
}
