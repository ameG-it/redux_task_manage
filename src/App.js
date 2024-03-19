import { Counter } from './features/counter/Counter';
import './App.css';
import TaskInput from './components/Task/TaskInput';
import TaskList from './components/Task/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TaskInput />
        <TaskList />
      </header>
    </div>
  );
}

export default App;
