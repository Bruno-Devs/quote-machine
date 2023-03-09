import React, { useState } from "react";
import styled from "styled-components";
import Quotes from "./components/Quotes";
import Authors from "./components/Authors";
import Button from "./components/Button";
import { FaTwitter } from "react-icons/fa";

const App = () => {
  const [Quote, setQuote] = useState(
    "When I let go of what I am, I become what I might be."
  );
  const [Author, setAuthor] = useState("George Addair");

  const getRandonQuote = () => {
    let randomInteger = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
  };

  const quotesArray = [
    {
      quote: "this is a randomised quote",
      author: "Aristotle",
    },
    {
      quote: "When I let go of what I am, I become what I might be.",
      author: "George Addair",
    },
    {
      quote:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Ezewa",
    },
    {
      quote:
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
      author: "Amadi",
    },
  ];

  return (
    <Wrapper>
      <div id="quote-box">
        <Quotes Quote={Quote} />
        <Authors newAuthor={Author} />
        <Button onClick={() => getRandonQuote()} />
        <a href="https://twitter.com/home">
          <FaTwitter />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  button {
  }
`;
export default App;
