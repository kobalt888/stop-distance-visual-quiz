import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/quiz/QuizPage';
import StudySlideshow from './pages/study/StudySlideshow';
import ThankYouPage from './pages/quiz/ThankYouPage';
import FadeTransition from './components/organisms/FadeTransition';
import AppThemeProvider from './theme/AppThemeProvider';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FadeTransition><HomePage /></FadeTransition>} />
      <Route path="/quiz" element={<FadeTransition><QuizPage /></FadeTransition>} />
      <Route path="/study" element={<FadeTransition><StudySlideshow /></FadeTransition>} />
      <Route path="/thank-you" element={<FadeTransition><ThankYouPage /></FadeTransition>} />
    </Routes>
  );
}

export default function App() {
  return (
    <AppThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppThemeProvider>
  );
}
