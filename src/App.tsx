
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Videos from './components/Videos/Videos';
import Slides from './components/Slides/Slides';
import Tools from './components/Tools/Tools';
import Workshops from './components/Workshops/Workshops';
import Forum from './components/Forum/Forum';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
        <Videos />
        <Slides />
        <Tools />
        <Workshops />
        <Forum />
      </main>
      <Footer />
    </div>
  );
}

export default App;
