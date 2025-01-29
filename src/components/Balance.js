import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  //Each transaction is an OBJECT with an id, text and amount property.

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <> 
        <h4 className='balance-h4'>Your Balance</h4>
        <h1 id ="balance">${total}</h1>
    </>
  )
}
