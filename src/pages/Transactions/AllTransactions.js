import React from 'react'
import { useLocation } from 'react-router-dom';
import Balance from '../../components/Balance';
import Form from '../../components/Form';
import Transactions from '../../components/Transactions/Transactions';
import "./AllTransactions.css"


const AllTransactions = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="all-transactions-container">
      <div>
        <Balance />
        <Form></Form>
      </div>
      <Transactions />
    </div>
  );
}

export default AllTransactions