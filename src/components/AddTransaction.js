import React , {useState, useContext}from "react";
import {GlobalContext} from "../context/GlobalState";


export const AddTransaction = () => {
    {/*Setting COMPONENT LEVEL STATES*/} 
    const [text, setText] = useState(""); {/*the default value of the text in the form is an EMPTY STRING ''*/} 
    const [amount, setAmount] = useState(0);  {/*the default value of the amount in the form is 0 */}

    const {addTransaction} = useContext(GlobalContext); {/*retrieving the addTransaction function from GlobalContext */}

    const onSubmit = e => {
        e.preventDefault(); {/*preventing the default behaviour of the form which is to reload the page*/}
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount 
          }
        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    }


  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value = {text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..."></input>
         {/* setText(e.target.value)} --> this sets the text to whatever is being currently typed*/} 
        </div>
        <div className="form-control">
          <label htmlFor="amount" className="amount">
            Amount <br></br>(negative - expense, positive - income)
          </label>
          <input
            type="number"
            value = {amount} onChange={(e) => setAmount(e.target.value)}
            id="amount"
            placeholder="Enter amount..."
          ></input>
          <button className="btn">Add transaction</button>
        </div>
      </form>
    </>
  );
};
