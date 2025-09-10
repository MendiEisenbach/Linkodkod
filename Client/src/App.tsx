import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationLayout from "./Components/application-layout/ApplicationLayout";
import Home from "./Pages/Home";
import PostPage from "./Pages/PostPage";
import CreatePost from "./Pages/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <ApplicationLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </ApplicationLayout>
    </BrowserRouter>
  );
}

export default App;
