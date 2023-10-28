import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDtae = new Date (2023, 10, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294;
  return (
    <div className="expense-item">
      <div>{expenseDtae.toISOString()}</div>
      <div className= "expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
