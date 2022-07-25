import './App.css';
import Navbar from './Components/Navbar/Admin/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="content">
      <Navbar />
        <h1>PHARMA</h1>
       <Footer/>
      </div>
    </div>
  );
}

export default App;