import "./App.css";
import Weather from "./components/weather";
import Clock from "./components/clock";
import Loading from "./components/loading";
import TodoTemplate from "./components/todoTemplate";
function App() {
  return (
    <div>
      <Clock />
      {/* <Loading /> */}
      <TodoTemplate>안녕하세요</TodoTemplate>
    </div>
  );
}

export default App;
