import { useState } from "react";

// css
import "./ExpenseItem.css";

// Components
import Card from "../UI/Card"; // Card
import ExpenseDate from "./ExpenseDate"; // ExpenseDate

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.data.title);

  const amount = props.data.amount;
  const date = props.data.date;

  // Edit Title
  function editTitleHandler() {
    setTitle("수정됨");
  }

  // return
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
        <button onClick={editTitleHandler}>내역 수정하기</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
