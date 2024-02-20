import React, { useState, useEffect } from 'react'

export default function Quote() {
    const [quotes, setQuotes] = useState([]);
    const [anotherQuote, setAnotherQuote] = useState("");

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(data => {
                setQuotes(data)
            })
    }

    const quoteResult = quotes.map((quote) => {
        return <div key={quote.index} className="quote-section">
            <div className="quote">
                <span className='quotes-char'>“</span>
                <p> {quote.text}</p>
                <span className='quotes-char'>”</span>
            </div>
            <p className="author">
                <div className='divider'> </div>
                {quote.author.replace(", type.fit", "")}
            </p>
        </div>
    })

    let randomQuote = quoteResult[Math.floor(Math.random() * quoteResult.length)];
    let getAnotherQuote = () => {
        setAnotherQuote(quoteResult[Math.floor(Math.random() * quoteResult.length)]);
        return anotherQuote;
    }

    return (
        <>
            <h1 className='underline-title'>Quote of the day</h1>
            <div className="quote-container">
                <blockquote>
                    {randomQuote}
                </blockquote>
                <button className="btn-new underline" onClick={() => getAnotherQuote()}>
                    get new one
                </button>
            </div>
        </>
    )
}
