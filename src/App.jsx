import './App.css';
import { DataGrid } from './wcWrappers/DataGrid';

function App() {
  const columns = [
    {columnName: 'ID'},
    {columnName: 'First Name'},
    {columnName: 'Last Name'},
    {columnName: 'Email'},
    {columnName: 'Street'},
    {columnName: 'Country'},
    {columnName: 'University'},
    {columnName: 'IBAN'},
  ]

  return (
    <div className="App">
      <DataGrid columns={columns} />
    </div>
  );
}

export default App;
