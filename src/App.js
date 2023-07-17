import './App.css';
import  {Welcome}  from './components/Greet1';
import Greet from './components/Greet'
import { Component } from 'react';
class App extends Component{
render() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}
}

export default App;
