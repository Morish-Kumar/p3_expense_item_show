// App function
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
function App() {

    // array of data to be passed to components for the props situated in ExpenseItem.js file
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  /* 
    const para = document.createElement("p"); // creating a paragrph element
    para.textContent = "this is also visible"; // setting the content of paragraph

    document.getElementById('root').append(para); // appending the paragraph to root class
    */
  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
