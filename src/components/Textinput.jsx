import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Textinput.css'

function Textinput(props) {

    const [text, setText] = useState("");

    const handleTextUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Text Converted To Uppercase", "success");
    }
    const handleonChange = (event) => {
        setText(event.target.value);
    }
    const handleTextLow = () => {
        setText(text.toLowerCase());
        props.ShowAlert("Text Converted To Lowercase", "success");
    }
    const handleTextClear = () => {
        setText("")
        props.ShowAlert("Text Cleared", "success");
    }
    // To Remove Extra Spaces using regular expressions
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.ShowAlert("Extra Spaces Removed From The Text", "success");
    }
    // To Copy Text From Textarea on clipboard 
    const handleTextCopy = (event) => {
        navigator.clipboard.writeText(text);
        props.ShowAlert("Text Copied", "success");
    }

    const capitalizeeach = () => {
        const newText = text.split(/\s+/);
        const filteredArray = newText.filter(word => word.trim() !== '');
        const capitalizearray = filteredArray.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        setText(capitalizearray.join(" "));
        props.ShowAlert("Text Capitalized", "success");
    }

    // Words Count Function
    const wordscount = () => {
        const wordsArray = text.split(/\s+/);
        const filteredArray = wordsArray.filter(word => word !== '');
        return filteredArray.length;
    }

    // Dark Theme
    const [mode, setMode] = useState('light');

    const lightMode = () => {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      props.ShowAlert("Light theme enabled", "success");
    };
  
    const darkMode = () => {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      props.ShowAlert("Dark theme enabled", "success");
    };
    return (
        <>
            <div className='utility-container'>
                {/* Heading */}
                <div className="themeSelector">
                    <span id='white' onClick={lightMode}></span>
                    <span id='black' onClick={darkMode}></span>
                </div>
                <h2 className="heading-2">{props.textboxheading}</h2>

                {/* Text Utility Buttons */}
                <div className='btn-container'>
                <button disabled={text.length === 0} className={`${mode === "dark" ? "darkBtnArea" : ""} btn`} onClick={handleTextUp}>Uppercase</button>
                <button disabled={text.length === 0} className={`${mode === "dark" ? "darkBtnArea" : ""} btn`} onClick={handleTextLow}>Lowercase</button>
                <button disabled={text.length === 0} className={`${mode === "dark" ? "darkBtnArea" : ""} btn`} onClick={capitalizeeach}>Capitalize</button>
                <button disabled={text.length === 0} className={`${mode === "dark" ? "darkBtnArea" : ""} btn`} onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className={`${mode === "dark" ? "darkBtnArea" : ""} btn`} onClick={handleTextCopy}>Copy Text</button>
                <button disabled={text.length === 0} className='clear-btn' onClick={handleTextClear}>Clear Text</button>
                </div>

                {/* Text Area */}
                <textarea className={`txt-area ${mode === "dark" ? "darkTextArea" : ""}`} value={text} onChange={handleonChange} id="textarea" rows="8" placeholder='Enter Your Text To Transform'></textarea>
            
                <div className='preview-container'>
                <h3 className='heading-3'>Your Text Summary</h3>
                <p><span id='words-count'>{wordscount()}</span> Words, <span id='chara-count'>{text.length}</span> Characters</p>
                <h3 className='heading-3' >Text Preview</h3>
                <p id="txtPre" className={`text-preview ${mode === "dark" ? "darkTextArea" : "lightTextArea"}`}>{text.length > 0 ? text : 'No Text To Preview'}</p>
                </div>
            </div>
        </>
    )
}

Textinput.protoTypes = { textboxheading: PropTypes.string };
Textinput.defaultProps = { textboxheading: "Text Transform Pro" };
export default Textinput