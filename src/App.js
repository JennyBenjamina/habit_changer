import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HabitPage from './pages/HabitPage';
import LoginForm from './pages/LoginForm';
import Registration from './pages/Registration';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home/" element={<Dashboard />} />
          {/* <Route path="/home/:id" element={<Dashboard />} /> */}

          <Route path="/habits" element={<HabitPage />} />
          <Route path="/habits/:id" element={<HabitPage editMode={true} />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
