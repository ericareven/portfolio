import './App.module.scss';
import Layout from './components/Layout'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;

