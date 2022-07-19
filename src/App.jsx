import './App.css';
import { DataGrid } from './wcWrappers/DataGrid';
import rowsMock from './MOCK_DATA.json';

function App() {
  const columns = [
    {columnName: 'ID', dataFieldName: 'id'},
    {columnName: 'First Name', dataFieldName: 'firstName'},
    {columnName: 'Last Name', dataFieldName: 'lastName'},
    {columnName: 'Email', dataFieldName: 'email'},
    {columnName: 'Country', dataFieldName: 'country'},
    {columnName: 'IP Adress', dataFieldName: 'ipAdress'},
    {columnName: 'Company Name', dataFieldName: 'companyName'},
    {columnName: 'Language', dataFieldName: 'language'}
  ]

  return (
    <div className="App">
      <DataGrid columns={columns} rows={rowsMock} />
    </div>
  );
}

export default App;
