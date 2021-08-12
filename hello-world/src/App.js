import './App.css';

import Trueye from './components/Trueye'
import Zerihun from './components/Zerihun'
function App() {
  return (
    <div className="App">
      <Trueye></Trueye>
      <Zerihun></Zerihun>
      <Zerihun name= 'abebe'></Zerihun>
      <Zerihun name= 'nathen'></Zerihun> 
    </div>
  ); 
}

export default App;
