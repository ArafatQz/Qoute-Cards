import React, { useState } from 'react';
import './quote_card.css';
import './icons/x-icon.png';
import getRandomColor from './backgroundColor';
import data from './quotes/all_quotes.json';

export default function QuoteCard() {
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * 101));
  const myColor = getRandomColor();

  const getNextQuote = () => {
    const newIndex = (quoteIndex + 1) % data.length;
    setQuoteIndex(newIndex);
  };

  // Set the background color with a transition
  document.body.style.transition = 'background-color 3s'; // Adjust the duration as needed
  document.body.style.backgroundColor = myColor;

  // Set the quote text color with a transition
  const quoteStyle = {
    color: myColor,
    transition: 'color 0.5s', // Adjust the duration as needed
  };

  const quote = data[quoteIndex].quote;
  const author = data[quoteIndex].author;

  return (
    <div className="card shadow" id="quote-box">
      <div className="card-body">
        <blockquote className="blockquote mb-0" id="text">
          <h2>
            <span className="quote-sign" style={quoteStyle}>“</span> {quote}{' '}
            <span className='quote-sign' style={quoteStyle}>”</span>
          </h2>
          <footer className="author" id="author">{author}</footer>
          <div className="footer">
            <button
              className="button"
              style={{ backgroundColor: myColor }}
              id="new-quote"
              onClick={getNextQuote}
            >
              <span className="span"><b>Next Quote</b></span>
            </button>
            <div className="div">
              <a href="http://www.twitter.com/intent/tweet" className="a" id="tweet-quote">
                <img
                  className="img"
                  style={{ backgroundColor: myColor }}
                  src={require('./icons/x-icon.png')}
                  alt="X Icon"
                />
              </a>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
}
