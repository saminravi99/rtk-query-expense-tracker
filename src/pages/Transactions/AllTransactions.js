import React from 'react'
import { useLocation } from 'react-router-dom';

const AllTransactions = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>AllTransactions</div>
  )
}

export default AllTransactions