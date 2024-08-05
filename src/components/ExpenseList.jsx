import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, removeExpense }) => {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} removeExpense={removeExpense} />
      ))}
    </div>
  );
};

export default ExpenseList;
