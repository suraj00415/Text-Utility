import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Convert to Uppercase","success")
    }
    const handlelowClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Convert to Lowercase","success")
    }
    const clearClick = () => {
        setText("")
        props.showAlert("Cleared Text","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#2a2a2e',color:props.mode==='light'?'black':'White'}}></textarea>
                </div>
                <button className="btn btn-primary my-1" onClick={handleUpClick} >Convert To Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handlelowClick} >Convert To Lowercase</button>
                <button className="btn btn-primary my-1" onClick={clearClick} >Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((n)=>{return n.length!==0}).length} words , {text.split(/\s+/).join('').length} Chararcters</p>
                <p>{0.008*text.split(" ").filter((n)=>{return n.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing To Preview"}</p>
            </div>
        </>
    )
}

