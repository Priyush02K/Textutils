import React,{useState} from 'react'


export default function TextFrom(props) {

    const handleUpClick =() =>{
      //  console.log("uppercase click" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");


    }

    const handleloClick =() =>{
      //  console.log("uppercase click" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");


    }
    

    const ClearText =() =>{
      //  console.log("uppercase click" + text);
        let newText=" "
        setText(newText);
        props.showAlert("Text Cleared!", "success");

    }


    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Speaking Voice!", "success");

    }


   
       const download=(filename, text)=>{
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none'; document.body.appendChild(element);
      element.click(); document.body.removeChild(element);

    }


  //   const handleCopy = () => {
  //     navigator.clipboard.writeText(text); 
  //     props.showAlert("Copied to Clipboard!", "success");
  // }

    const handleOnChange =(event) =>{
      //  console.log("On change");
        setText(event.target.value)

    }

    
    const [text, setText] = useState('Entre text here2');


  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
       <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>``
  </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to Uppercase </button>
        <button className='btn btn-primary mx-2' onClick={handleloClick} >Convert to Lowercase </button>
        <button className='btn btn-primary mx-2' onClick={download} >Download file </button>
        <button className='btn btn-primary mx-2' onClick={ClearText} >Clear Text  </button>
        {/* <button className='btn btn-primary mx-2' onClick={handleCopy} >Copy Text  </button> */}

        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>




    </div>

    <div className="container my-3" >

      <h2>Your Summary</h2>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{ 0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview </h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>

    </div>
    </>
  )
}


