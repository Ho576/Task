/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
*/
/*export default function App()
{
  return (
    <>
    <h2>navbar</h2>
    <p></p>
    </>

  );
}*/

//rfc/rfce do it


import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'


export default function App() {
  return (
    <>
    <div className='container'>
    <Navbar/>
    <Products/>
    <Footer/>

    </div>
    
    </>
    
  )
}


