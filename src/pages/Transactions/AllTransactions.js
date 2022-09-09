import React from 'react'
import { useLocation } from 'react-router-dom';
import Balance from '../../components/Balance';
import Form from '../../components/Form';
import Transactions from '../../components/Transactions/Transactions';
import Pagination from '../../utils/Pagination';
import Search from '../../utils/Search';
import TypeFilter from '../../utils/TypeFilter';
import "./AllTransactions.css"


const AllTransactions = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="all-transactions-container min-h-screen pt-10 bg-gray-100">
      <div>
        <Balance />
        <Form></Form>
        <div>
          <Pagination />
        </div>
      </div>
      <div>
        <Search/>
        <TypeFilter/>
        <Transactions />
      </div>
    </div>
  );
}

export default AllTransactions