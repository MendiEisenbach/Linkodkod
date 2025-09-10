import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationLayout from "./Components/application-layout/ApplicationLayout";
import Home from "./Pages/Home";
import PostPage from "./Pages/PostPage";
import CreatePost from "./Pages/CreatePost";
import Login from "./Pages/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ApplicationLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ApplicationLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
