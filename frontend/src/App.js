import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CheckLoginPage from "./pages/CheckLoginPage";
import CreateNotePage from "./pages/CreateNotePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <HashRouter>
        <MainHeader
          title="Notes with CSRF Trial App"
          username={username}
          setUsername={setUsername}
        />
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setUsername={setUsername} />}
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <HomePage username={username} />}
              />
            }
          />
          <Route
            path="/notes/:id"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <NoteDetailPage usesername={username} />}
              />
            }
          />
          <Route
            path="/create-note"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <CreateNotePage username={username} />}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
