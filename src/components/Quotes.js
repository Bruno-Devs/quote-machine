import { FaQuoteLeft } from "react-icons/fa";

const Quotes = ({ Quote }) => (
  <div>
    <p id="text"> <FaQuoteLeft></FaQuoteLeft> {Quote}</p>
  </div>
);

export default Quotes;
