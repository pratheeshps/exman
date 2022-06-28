import "./App.scss";

import Table from "./commons/table";

function App() {

  const convertToDateString = (timestamp) => {
    const date = new Date(timestamp);
    return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
  }

  return (
    <div className="em-main-container">
      <Table
        headers={{ date: "Date", description: "Description", amount: "Amount" }}
        rows={[
          {
            date: 1656350912000,
            description: "Painting Putty",
            amount: 2080,
          },
          {
            date: 1655400512000,
            description: "Electrical wires",
            amount: 3450,
          },
          {
            date: 1654104512000,
            description: "Plumbing fittings",
            amount: 1250,
          }
        ]}
        footer={{ date: "", description: "Total", amount: 5530 }}
        sorters={{
          date: true,
          description: true,
          amount: true,
        }}
        processData={{
          date: convertToDateString
        }}
      />
    </div>
  );
}

export default App;
