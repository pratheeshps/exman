import "./App.scss";

import Table from "./commons/table";

function App() {
  return (
    <div className="em-main-container">
      <Table
        headers={{ date: "Date", description: "Description 123456", amount: "Amount" }}
        rows={[
          {
            date: "24/06/2022",
            description: "Painting Putty",
            amount: 2080,
          },
          {
            date: "25/06/2022",
            description: "Electrical wires",
            amount: 3450,
          },
          {
            date: "22/07/2022",
            description: "artech",
            amount: 3450,
          }
        ]}
        footer={{ date: "", description: "Total", amount: 5530 }}
        sorters={{
          date: true,
          description: true,
          amount: true,
        }}
      />
    </div>
  );
}

export default App;
