import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AllTransactions from "./pages/Transactions/AllTransactions";

function App() {
  return (
    <div >
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-transactions" element={<AllTransactions />} />
      </Routes>
      <div className="footer">&copy;2022 Learn with Sumit</div>
    </div>
  );
}

export default App;
