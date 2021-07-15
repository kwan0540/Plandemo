import './App.css';
import JsonForm from './components/JsonForm'
import Navbar from './components/Navbar';
import Plan from './components/Plan'
import {useSelector} from 'react-redux'

function App() {
  const obj = useSelector(state => state.plan)
  console.log(obj)

  return (
    <div className="App">
      <Navbar />
      <JsonForm />
      {obj.Submitted == true && <Plan />}
    </div>
  );
}

export default App;
