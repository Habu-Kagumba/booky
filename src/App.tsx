import { FC } from "react";

function App() {
import logo from "./logo.png";
import "./app.css";

const App: FC = () => {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
