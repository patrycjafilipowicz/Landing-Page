import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="opening">
        <div className="headerLogo">Header Logo</div>
        <div className="introduction">
          <h1>This app is about cats!</h1>
          <p>Cats are the most beautiful animals in the world.</p>
          <button>Sign up</button>
          <div className="image">pictrue</div>
          <div className="headers">
            <div>link 1</div>
            <div>link 2</div>
            <div>link 3</div>
          </div>
        </div>
      </div>
      <div className="images"></div>
      <div className="quote"></div>
      <div className="closing"></div>
    </div>
  );
}

export default App;
