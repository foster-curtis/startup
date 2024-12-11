import React, { useState, useEffect } from 'react';

export function PasswordGeneratorCard() {
    const [words, setWords] = useState([]);
    const [randomWords, setRandomWords] = useState(['Your new favorite password coming soon...']);
    const [delimiter, setDelimiter] = useState('-');
    const [isCapitalized, setIsCapitalized] = useState(true);

    useEffect(() => {
        fetch('./src/passphrase-candidates.txt')
        .then(response => response.text())
        .then(data => { const wordsArray = data.split('\n').map(word => word.trim()).filter(word => word);
            setWords(wordsArray); })
        .catch(error => console.error('Error fetching the file:', error));
    }, []);

    const generateWords = () => {
        const randomSelection = [];
        for (let i = 0; i < 4; i++) {
          const randomIndex = Math.floor(Math.random() * words.length);
          let word = words[randomIndex];
          randomSelection.push(word);
        }
        setRandomWords(randomSelection);
    };

    useEffect(() => {
        updateDisplayedWords();
    }, [delimiter, isCapitalized, randomWords]);
    
    const updateDisplayedWords = () => {
        const result = randomWords
        .map(word => isCapitalized
            ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            : word.toLowerCase())
        .join(delimiter);
        document.getElementById('word-box').innerText = result;
    };
    
    
        const handleDelimiterChange = (event) => {
        setDelimiter(event.target.value);
    };

    const handleCapitalizationChange = (event) => {
        setIsCapitalized(event.target.checked);
        updateDisplayedWords();
    };
    
    return (
        <div className="card-body">
            <h3 className="card-title">Generate a Passphrase:</h3>

            <p className="card-text" id="word-box">{ randomWords.join(delimiter) }</p>
            <div><button id="generate-btn" onClick={generateWords} className="btn btn-primary m-3">Generate</button></div>

            <h5 className='p-2'>Choose your word delimiter:</h5>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="delimiter" value="-" id="dash" checked={delimiter === '-'} onChange={handleDelimiterChange}/>
                <label className="form-check-label" htmlFor="dash">dash ( - )</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="delimiter" value="_" id="underscore" checked={delimiter === '_'} onChange={handleDelimiterChange}/>
                <label className="form-check-label" htmlFor="underscore">underscore ( _ )</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="delimiter" value="." id="dot" checked={delimiter === '.'} onChange={handleDelimiterChange}/>
                <label className="form-check-label" htmlFor="dot">dot ( . )</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="delimiter" value="" id="none" checked={delimiter === ''} onChange={handleDelimiterChange}/>
                <label className="form-check-label" htmlFor="dot">None</label>
            </div>

            <div className="form-check my-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="capitalize-toggle"
                    defaultChecked
                    onChange={handleCapitalizationChange}
                />
                <label className="form-check-label" htmlFor="capitalize-toggle">
                    Capitalize Words
                </label>
            </div>


            <div className="card-text p-4">Memory Tip: ....</div>
        </div>
    );
}