import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchLatestTransactions, fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const { transactions, latestTransactions, isLoading, isError , editing} = useSelector(
        (state) => state.transaction
    );

    useEffect(() => {
        dispatch(fetchTransactions());
        dispatch(fetchLatestTransactions());
    }, [dispatch, editing]);

    // decide what to render
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && transactions?.length > 0 && location.pathname === "/") {
        content = latestTransactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ));
    }
    if (!isLoading && !isError && transactions?.length > 0 && location.pathname === "/all-transactions") {
        content = transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ));
    }

    if (!isLoading && !isError && transactions?.length === 0) {
        content = <p>No transactions found!</p>;
    }

    let viewAll =
      location.pathname === "/all-transactions" ? null : (
        <button
          onClick={() => {
            navigate("/all-transactions");
          }}
          className="btn"
        >
          View All
        </button>
      );

    return (
      <>
        <div className="conatiner_of_list_of_transactions">
          <p
          style={{
            textAlign: "center",
          }} 
          className="second_heading">Your Transactions:</p>

          <ul>{content}</ul>
          {viewAll}
        </div>
      </>
    );
}
