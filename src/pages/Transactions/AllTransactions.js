import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Balance from '../../components/Balance';
import Form from '../../components/Form';
import Transactions from '../../components/Transactions/Transactions';
import Pagination from '../../utils/Pagination';
import Search from '../../utils/Search';
import TypeFilter from '../../utils/TypeFilter';
import "./AllTransactions.css"
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const AllTransactions = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="all-transactions-container min-h-screen pt-10 bg-gray-100">
      <FontAwesomeIcon
      onClick={handleGoBack}
      className="absolute top-20 left-10 text-5xl cursor-pointer" 
       icon={faArrowLeft} />
      <div>
        <Balance />
        <Form></Form>
        <div>
          <Pagination />
        </div>
      </div>
      <div>
        <Search />
        <TypeFilter />
        <Transactions />
      </div>
    </div>
  );
}

export default AllTransactions