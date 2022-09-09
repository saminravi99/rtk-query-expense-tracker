import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { typeSelected } from '../features/filter/filterSlice';

const TypeFilter = () => {
    const dispatch = useDispatch();
    const {type} = useSelector((state) => state.filter) || {};


    const handleType = (e) => {
        dispatch(typeSelected(e.target.value));
    }
  return (
    <div className="mx-auto flex justify-around mt-3">
      <div className="radio_group">
        <input
          required
          type="radio"
          value="income"
          name="type"
          checked={type === "income"}
          onClick={handleType}
        />
        <label>Income</label>
      </div>
      <div className="radio_group">
        <input
          type="radio"
          value="expense"
          name="type"
          placeholder="Expense"
          checked={type === "expense" }
          onClick={handleType}
        />
        <label>Expense</label>
      </div>
    </div>
  );
}

export default TypeFilter