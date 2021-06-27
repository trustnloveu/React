import "./ExpenseItem.css";

// Components
import ExpenseDate from "./ExpenseDate"; // ExpenseDate

const ExpenseItem = (props) => {
  // return
  return (
    <div className="expense-item">
      <ExpenseDate date={props.data.date} />
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">{props.data.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
