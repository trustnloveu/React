import "./ExpenseItem.css";

// Components
import Card from "../UI/Card"; // Card
import ExpenseDate from "./ExpenseDate"; // ExpenseDate

const ExpenseItem = (props) => {
  // return
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date} />
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">{props.data.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
