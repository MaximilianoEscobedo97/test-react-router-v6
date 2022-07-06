import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './routes/Home';
import { Users } from './routes/Users';
import { About } from './routes/About';
import { User } from './routes/Users/User';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} >
              <Route path=":userId" element={<User />} />
              <Route index element={<div>Seleccione un usuario</div>} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
