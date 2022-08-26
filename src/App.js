import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header.js';
import Content from './pages/content';

function App() {
  return (
    <div className="App">
     <Header/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
