import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <ExpenseItem
      title={props.item[0].title}
      amount={props.item[0].amount}
      date={props.item[0].date}
    />
  );
};

export default Expenses;
