import './App.css';
import Header from './components/Header';
import Container from './Container';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        {/* <img src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_696099962_357343.jpg' alt="books" /> */}
      <Container/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
