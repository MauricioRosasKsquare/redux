import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostView from './pages/PostView';
import PostGrid from './pages/PostGrid';
import LandingPage from './pages/LandingPage'
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import CreateForm from './pages/CreateForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<LandingPage />}/>
        <Route path='/login' exact element={<Login />} />
        <Route path='/posts' exact element={<PostGrid />} />
        <Route path="/posts/:id" element={<PostView /> }/>
        <Route path="/create" element={ <CreateForm /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
