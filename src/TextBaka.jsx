import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Baka(props) {
    const [text, setText] = useState('');

    const ChangetoUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleonchange = (event) => {
        setText(event.target.value);
    }

    const ChangetoLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showalert("Copied to clipboard", "success");
    }

    const handleextraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const wordCount = text.trim() === '' ? 0 : text.split(/\s+/).filter(word => word.trim() !== '').length;
    const charCount = text.length;

    return (
        <>
            <div className="baka2" style={{ color: props.mode === 'light' ? '#212530' : 'white' }}>
                <h1>Enter your Text</h1>
                <textarea 
                    className="form-control" 
                    style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212530', color: props.mode === 'light' ? '#212530' : 'white' }} 
                    id="floatingTextarea2" 
                    value={text} 
                    rows="10" 
                    onChange={handleonchange}>
                </textarea>
            </div>
            <button className="btn btn-info mt-3" type="button" onClick={ChangetoUpper}>Change to Upper</button>
            <button className="btn btn-info mt-3 mx-2" type="button" onClick={ChangetoLower}>Change to Lower</button>
            <button className="btn btn-info mt-3 mx-2" type="button" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-info mt-3 mx-2" type="button" onClick={handleextraspaces}>Remove extra spaces</button>
            <div className="headinghai mt-4" style={{ color: props.mode === 'light' ? '#212530' : 'white' }}>
                <h4>Your text summary</h4>
                <p>{wordCount} words and {charCount} characters</p>
                <p>{0.008 * wordCount} Minutes read</p>
            </div>
            <div className="preview mt-4" style={{ color: props.mode === 'light' ? '#212530' : 'white' }}>
                <h4>Preview of Text</h4>
                <p>{charCount > 0 ? text : "Enter some text in box to preview it over here"}</p>
            </div>
        </>
    )
}

Baka.propTypes = {
    mode: PropTypes.string.isRequired,
    showalert: PropTypes.func.isRequired
};
