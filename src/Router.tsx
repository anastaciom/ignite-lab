import { Routes, Route } from "react-router-dom";
import EventPage from "./pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<h1>ERROR 404</h1>} />
      <Route path="/" element={<h1>HOME</h1>} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/event/lesson/:slug" element={<EventPage />} />
    </Routes>
  );
}
