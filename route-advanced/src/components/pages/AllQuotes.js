import { useEffect, useState } from "react";
import axios from "axios";

import QuoteList from "../quotes/QuoteList";

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  //* useEffect
  useEffect(() => {
    const getQuotes = async () => {
      const { data } = await axios.get(
        "https://react-test-98851-default-rtdb.firebaseio.com/quotes.json"
      );

      if (data) {
        const quoteList = [];

        for (const key in data) {
          quoteList.push({
            id: key,
            author: data[key].author,
            text: data[key].text,
          });
        }

        setQuotes(quoteList);
      }
    };

    getQuotes().catch((err) => console.log(err));
  }, []);

  //* return
  return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
