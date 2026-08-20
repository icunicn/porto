import { Route, Routes } from 'react-router-dom';
import HomePage from '../features/home/HomePage';
import ExperiencePage from '../features/experience/ExperiencePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
