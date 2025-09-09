
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationLayout from "./Components/application-layout/ApplicationLayout";
import Home from "./Pages/Home";
import PostPage from "./Pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <ApplicationLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostPage/>} />
        </Routes>
      </ApplicationLayout>
    </BrowserRouter>
  );
}

export default App;
