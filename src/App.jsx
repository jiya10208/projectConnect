import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import SignUp from "./pages/Signup";
import Projects from "./pages/Projects";
const BASE_URL = "http://localhost:1000";

function App() {
  const [projects, SetProjects] = useState();
  useEffect(
    function () {
      async function fetchProjects() {
        try {
          const res = await fetch(`${BASE_URL}/project`);
          const data = await res.json();
          console.log(data);
          SetProjects(data);
        } catch {
          console.log("error faced");
        }
      }
      fetchProjects();
    },
    [SetProjects]
  );

  const image = "https://i.pravatar.cc/100?";
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="projects" element={<Projects />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
