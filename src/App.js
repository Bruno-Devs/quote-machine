import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Quotes from "./components/Quotes";
import Authors from "./components/Authors";
import Button from "./components/Button";
import { FaTwitter, FaTumblr } from "react-icons/fa";

const QuoteApp = () => {
  const [Quote, setQuote] = useState(
    "When I let go of what I am, I become what I might be."
  );
  const [Author, setAuthor] = useState("George Addair");

  const [quotesArray, setQuotesArr] = useState(null);

  const getRandonQuote = () => {
    let randomInteger = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
  };

  let quotesDbURL =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  useEffect(() => {
    const fetchQuote = async (quotesURL) => {
      const res = await fetch(quotesURL);
      const data = await res.json();
      setQuotesArr(data.quotes);
    };
    fetchQuote(quotesDbURL);
  }, [quotesDbURL]);

  // const quotesArray = [
  //   {
  //     quote: "this is a randomised quote",
  //     author: "Aristotle",
  //   },
  //   {
  //     quote: "When I let go of what I am, I become what I might be.",
  //     author: "George Addair",
  //   },
  //   {
  //     quote:
  //       "The most difficult thing is the decision to act, the rest is merely tenacity.",
  //     author: "Ezewa",
  //   },
  //   {
  //     quote:
  //       "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
  //     author: "Amadi",
  //   },
  // ];

  return (
    <Wrapper>
      <div id="quote-box">
        <Quotes Quote={Quote} />
        <Authors newAuthor={Author} />
        <div>
          <Button onClick={() => getRandonQuote()} />
          <a
            id="tweet-quote"
            href={encodeURI(
              `https://www.twitter.com/intent/tweet?text=${Quote} -${Author}`
            )}
          >
            <FaTwitter />
          </a>
          <a href="https://tumblr.com/home">
            <FaTumblr />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & #quote-box {
    background: red;
  }
`;

export default QuoteApp;
