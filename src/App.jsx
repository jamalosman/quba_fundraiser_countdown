import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FundraiserScreen from './pages/FundraiserScreen';
import AdminScreen from './pages/AdminScreen';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<FundraiserScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
