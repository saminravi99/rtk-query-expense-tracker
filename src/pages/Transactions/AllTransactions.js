import React from 'react'
import { useLocation } from 'react-router-dom';
import Balance from '../../components/Balance';
import Form from '../../components/Form';
import Transactions from '../../components/Transactions/Transactions';
import Pagination from '../../components/utils/Pagination';
import "./AllTransactions.css"


const AllTransactions = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="all-transactions-container min-h-screen">
      <div>
        <Balance />
        <Form></Form>
        <div>
          <Pagination/>
        </div>
      </div>
      <Transactions />
    </div>
  );
}

export default AllTransactions