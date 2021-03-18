import * as React from "react";
import './App.css';
import Greeting from './Greeting';
import MyForm from './MyForm';
import Counter from './Counter';
import ReducerSample from "./ReducerSample";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodosContextProvider } from "./components/TodosContext";


function App() {
  const onClick = (name:string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: {name:string; description:string}) => {
    console.log(form);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <ReducerSample />
        <Greeting onClick={onClick}/>
        <Counter />
        <MyForm onSubmit={onSubmit} /> */}
        <TodosContextProvider>
          <TodoForm />
          <TodoList />
        </TodosContextProvider>
      </header>
    </div>
  );
}

export default App;
