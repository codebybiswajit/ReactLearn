import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("Enter Your Text Here")
    const makeUpCase = () => {
        let newText = String(text).toUpperCase()
        setText(newText)
    }
    const makeLwCase = () => {
        let newText = String(text).toLowerCase()
        setText(newText)
    }
    const removeSpace = () => {
        let newText = String(text).replaceAll(" ", '')
        setText(newText)
    }
    const noOfWords = () => {

        let listword = String(text).split(" ")
        // for (let i = 0; i < listword.length; i++) {
        //     count += 1;
        //   }
        setText(listword.length)
    }
    const OnChange = (event) => {
        console.log("On Change Was Clicked")
        setText(event.target.value)
    }

    return (
        <>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 d-flex flex-column">
                    <div className="mb-3 my-3">
                        <label className="form-label">{props.heading}</label>
                        <textarea className="form-control  resize-none bg-dark" value={text} id="myText" rows="4" onChange={OnChange}></textarea>
                    </div>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <button type="button" className="btn btn-primary me-4 mb-1 py-1" onClick={makeUpCase}>Make UpperCase</button>
                        <button type="button" className="btn btn-primary me-4 mb-1 py-1" onClick={makeLwCase}>Make LowerCase</button>
                        <button type="button" className="btn btn-primary me-4 mb-1 py-1" onClick={removeSpace}>Remove Space</button>
                        <button type="button" className="btn btn-primary me-0 mb-1 py-1" onClick={noOfWords}>Calculate No. Of Words</button>
                    </div>
                    <div className="container py-2 boder  bg-black shadow my-3 p-3">
                        <h1>(Real Time) Text Anlasys </h1>
                        <div>
                            Your Sentence Conatin <details>
                                <p>Words : {text.length === 0 ? 0 : String(text).split(" ").length} <br />
                                letters : {String(text).length} <br />
                                Average Time For Reading  : {text.length === 0 ? 0 : (String(text).split(" ").length * 0.5 / 60).toFixed(2)} minitue</p>
                            </details>
                        </div>
                        <div className="preview bg-dark rounded p-1">
                        <h2 className=' p-1'>Preview : </h2>
                        <h6 className='shadow-sm p-2 bg-black'><br />{text}</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>

            </div>
        </>
    )
}
