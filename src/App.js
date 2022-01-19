
import './App.css';

import { Message, MessageList } from './components';

function App() {
  return (
    <div className="App">
      <Message text={'Text through props update'}></Message>
      <Message color="primary" text={'Text through props update alternate'}></Message>
      <Message color="alert" text={'Text through props update exclusive'}></Message>
      <MessageList />
    </div>

  );
}

export default App;
