import "./App.css";
import ApplicationLayout from "./Components/application-layout/ApplicationLayout.tsx";
import Home from "./Pages/Home.tsx";

function App() {
  return (
    <ApplicationLayout>
      <Home />
    </ApplicationLayout>
  );
}

export default App;
