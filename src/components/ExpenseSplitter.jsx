import React, { useState, useEffect } from "react";

const ExpenseSplitter = () => {
  const [friends, setFriends] = useState([
    { name: "Friend 1", expense: 0 },
    { name: "Friend 2", expense: 0 },
    { name: "Friend 3", expense: 0 },
    { name: "Friend 4", expense: 0 },
  ]);

  const [result, setResult] = useState([]);

  // Calculate how much each person should pay or receive
  useEffect(() => {
    const total = friends.reduce((sum, f) => sum + Number(f.expense), 0);
    const avg = total / friends.length;

    const balance = friends.map((f) => ({
      name: f.name,
      expense: f.expense,
      balance: (f.expense - avg).toFixed(2),
    }));

    setResult(balance);
  }, [friends]);

  const handleChange = (index, value) => {
    const updated = [...friends];
    updated[index].expense = Number(value);
    setFriends(updated);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto", fontFamily: "Arial" }}>
      <h2>💰 Group Expense Splitter</h2>

      {friends.map((friend, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <label>
            {friend.name}: ₹{" "}
            <input
              type="number"
              value={friend.expense}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-25 p-1.5 ml-2.5 border rounded"
            />
          </label>
        </div>
      ))}

      <hr />
      <h3>📊 Summary</h3>
      {result.map((r, i) => (
        <div key={i}>
          {r.name}:{" "}
          {r.balance > 0
            ? `should receive ₹${r.balance}`
            : r.balance < 0
            ? `should pay ₹${Math.abs(r.balance)}`
            : "is settled up"}
        </div>
      ))}
    </div>
  );
};

export default ExpenseSplitter;
