import { useState, useEffect } from 'react';
import {createTransactions } from "./Api";
import moment from 'moment';

function App() {
  let monthlyTotal;
  let completeTotal;


  const getTransactions = () => {
    return createTransactions().map((transaction, index) => {
      
      const { name, transactions } = transaction;
      const months = Object.keys(transactions);

      return (
        <div key={index}>
          <h1>{name}</h1>
          {months.map((heading, index) => {
            monthlyTotal = [];
            completeTotal = [];

            return (
              <div key={index}>
                <h2>{heading}</h2>
                {transactions[heading].map((item, index) => {
                  
                  const { amount } = item;
                  const points =
                    amount >= 50 && amount < 100
                      ? amount - 50
                      : amount > 100
                      ? 2 * (amount - 100) + 50
                      : 0;

                  monthlyTotal.push(points);
                  completeTotal.push(monthlyTotal);
                  return (
                    <div key={index}>
                      <span>{moment(item.date).format("LL")} | </span>
                      <span>Transaction Amount ${item.amount} | </span>
                      <span>Points: {points}</span>
                    </div>
                  );
                })}

                <div>
                  Total For month of {`${heading}`}:
                  {monthlyTotal.reduce((a, b) => a + b)}
                </div>
              </div>
            );
          })}
        </div>
      );
    })
  }

  return (
    <div className="">
      {getTransactions()}
    </div>
  );
}

export default App
