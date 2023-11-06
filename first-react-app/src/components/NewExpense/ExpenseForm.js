import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div>
                    <label className="new-expense__control">Title</label>
                    <input type='text' />
                </div>
                <div>
                    <label className="new-expense__control">Amount</label>
                    <input type='number' min='0.01' step='0.01'/>
                </div>
                <div>
                    <label className="new-expense__control">Date</label>
                    <input type='date' min='2019-01-01' max= '2024-12-31' />
                </div>
            </div>            
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form> 
    );
};
export default ExpenseForm;