//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className='app'>
    <Header/>
    <LandingPage/>
    <Footer/>
    {/* <h1 className="text-3xl font-bold underline items-center">
      Hello world!
    </h1> */}
    </div>
  );
}

export default App;
