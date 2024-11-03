import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
import Home from './pages/Home';
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            //   <Home />
            // </ProtectedRoute>
            <Home />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
