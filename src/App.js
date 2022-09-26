import "./App.css";
import Weather from "./components/weather";
import Clock from "./components/clock";
import Loading from "./components/loading";
import TodoTemplate from "./components/todoTemplate";
import TodoHead from "./components/todoHead";
import TodoList from "./components/todoList";
import TodoCreate from "./components/todoCreate";
function App() {
  return (
    <div>
      <Clock />
      {/* <Loading /> */}
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

export default App;
