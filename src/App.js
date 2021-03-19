import './App.css';
import Header from "./Components/Header/Header"
import Landing from "./Components/Landing/Landing"
import Information from "./Components/Information/Information"
import Dragon from "./Components/Dragon/Dragon"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />  
      <Landing />  
      <Information />
      <Dragon /> 
      <Dragon /> 
      <Footer /> 
    </div>
  );
}

export default App;
