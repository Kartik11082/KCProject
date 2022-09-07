// import the css file;
import "./Quotes.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Quotes() {
  const [quotes, setQuotes] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  // const url = process.env.REACT_APP_url;
  // const key = process.env.REACT_APP_X_RapidAPI_Key;
  // const host = process.env.REACT_APP_X_RapidAPI_Host;

  // useEffect(() => {
  //   setLoading(true);
  //   const options = {
  //     method: "GET",
  //     url: "https://quotes15.p.rapidapi.com/quotes/random/",
  //     params: { language_code: "en" },
  //     headers: {
  //       "X-RapidAPI-Key": key,
  //       "X-RapidAPI-Host": host,
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setQuoteAuthor(response.data.originator.name);
  //       setQuotes(response.data.content);
  //       console.log(quotes);
  //       console.log(quoteAuthor);
  //       setLoading(false);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // }, []);

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
        console.log(quotes);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="quote__div">
        <h2>Quote of the day</h2>
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
