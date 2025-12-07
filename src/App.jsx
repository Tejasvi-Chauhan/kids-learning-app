// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import CustomQuiz from "./pages/CustomQuiz";

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/custom-quiz" element={<CustomQuiz />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
