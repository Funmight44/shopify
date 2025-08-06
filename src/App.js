import './index.css';
import Header from './components/header';
import AllRoutes from './routes';
import Footer from './components/footer';

function App() {
  return (
    <div className='app'>
        <Header/>
        <AllRoutes/>
        <Footer/>
    </div>
      
      
  );
}

export default App;
