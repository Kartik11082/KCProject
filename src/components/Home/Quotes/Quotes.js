// import the css file;
import "./Quotes.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Quotes() {
  const [quotes, setQuotes] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://quotable.io/random?tags=education|motivational|self|wisdom")
      .then((res) => {
        setQuotes(res.data.content);
        setQuoteAuthor(res.data.author);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setQuotes("The only way to learn a new programming language is by writing programs in it");
        setQuoteAuthor("Dennis Ritchie");
      });
  }, []);

  return (
    <>
      <div className="quote__div">
        <h2 className="title">Quote of the day</h2>
        {loading && <div className="loader"></div>}
        <div className="quote">{quotes}</div>
        <div className="quote__author">
          <h3>-{quoteAuthor} </h3>
        </div>
      </div>
    </>
  );
}

export default Quotes;
