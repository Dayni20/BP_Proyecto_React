import logo from './logo.svg';
import './App.css';
import { UserProvider } from './Components/Auth/UserContext';
import Router from './Components/ComponentsRoute/Router';
import Footer from './Components/Paginas/Footer';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
        <Router/>
        <Footer/>
    </UserProvider>
  </BrowserRouter>
  );
}

export default App;
