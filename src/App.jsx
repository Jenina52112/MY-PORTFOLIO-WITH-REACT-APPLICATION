import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <header className="header">
      <Header />
      <nav className="navBar">
        <Navigation />
      </nav>
    </header>
  );
}

export default App;
