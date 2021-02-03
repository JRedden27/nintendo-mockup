import './App.css';
import Navigation from './components/Navigation/Navigation';
import Featured from './components/Featured/Featured';
import Advertising from './components/Advertising/Advertising';
import News from './components/News/News';
import Characters from './components/Characters/Characters';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Featured />
      <Advertising />
      <News />
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
