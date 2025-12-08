import "./App.css";
import PropsPractice from "./props-practice/props-style";

function App() {
  return (
    <div>
      <PropsPractice name="John Doe" mobile="9876543210" />
      <PropsPractice name="Jane Smith" mobile="8765432109" />
      <PropsPractice name="Bob Johnson" mobile="7654321098" />
    </div>
  );
}

export default App;