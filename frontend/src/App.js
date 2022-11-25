import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navegacion from './components/Navegacion';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Login from './pages/Login';
import DashProducts from './pages/DashProducts';
import DashListProducts from './pages/DashListProducts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navegacion />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categoria/:id' element={<Categorias />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<DashProducts />} />
          <Route path='/dashboard/categorie/:id' element={<DashListProducts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
