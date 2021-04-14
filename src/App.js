import './App.css';
import logo from './img/pokedev.png'
import "antd/dist/antd.css";
import { Input, Space } from 'antd';
import CardsPkm from './components/CardsPkm';


const { Search } = Input;


const onSearch = value => console.log(value);


function App() {
  return (
    <div>
      <div className="App"> 
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Search placeholder="" onSearch={onSearch} style={{ width: 400}} />
            <div className="container">
              <CardsPkm></CardsPkm>
            </div>
      </div>
      
    </div>
  );
}

export default App;
