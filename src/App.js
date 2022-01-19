import logo from './logo.svg';
import './App.css';
import { Message } from './components';

function App() {
  return (
    <div className="App">
      <Message text={'Text through props update'}></Message>
      <Message color="alert" text={'Text through props update alternate'}></Message>
      <Message color="primary" text={'Text through props update exclusive'}></Message>
    </div>
  );
}

export default App;
