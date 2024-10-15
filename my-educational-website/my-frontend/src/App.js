import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Articles from './components/Articles';
import FurtherReading from './components/FurtherReading';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <main>
        <Videos />
        <Articles />
        <FurtherReading />
      </main>
      <Footer />
    </div>
  );
}


export default App;
