import React from 'react';

const ExpenseItem = ({ expense, removeExpense }) => {
  return (
    <div>
      <span>{expense.description}</span>
      <span>{expense.amount}</span>
      <button onClick={() => removeExpense(expense.id)}>Remover</button>
    </div>
  );
};

export default ExpenseItem;
