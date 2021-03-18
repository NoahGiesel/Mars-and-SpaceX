import './App.css';
import Header from "./Components/Header/Header"
import Landing from "./Components/Landing/Landing"
import Information from "./Components/Information/Information"
import Dragon from "./Components/Dragon/Dragon"

function App() {
  return (
    <div className="App">
      <Header />  
      <Landing />  
      <Information />
      <Dragon /> 
    </div>
  );
}

export default App;
