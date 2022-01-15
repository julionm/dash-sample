import { Outlet } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';

function App() {
  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
