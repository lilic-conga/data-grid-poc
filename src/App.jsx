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
    {columnName: 'Empty Column', dataFieldName: 'emptyColumn'},
    {columnName: 'IP Adress', dataFieldName: 'ipAdress'},
    {columnName: 'Company Name', dataFieldName: 'companyName'},
    {columnName: 'Language', dataFieldName: 'language'},
  ]

  // max-size: 1000;
  const DEMO_PAGE_SIZE = 100;

  return (
    <div className="App">
      <DataGrid columns={columns} rows={rowsMock.slice(0, DEMO_PAGE_SIZE)} />
    </div>
  );
}

export default App;
