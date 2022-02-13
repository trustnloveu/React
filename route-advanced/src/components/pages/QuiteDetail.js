import { Route, useParams } from "react-router-dom";

import Comments from "../comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  //* return
  return (
    <>
      <h1>Quote detail page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
