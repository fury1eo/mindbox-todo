import { useState } from 'react';
import './App.css';
import { ITodo } from './types/types';
import Todos from './components/todos';

function App() {
  const [data, setData] = useState<ITodo[]>([]);

  return (
    <div className="App">
      <Todos setData={setData} data={data}/>
    </div>
  );
}

export default App;
