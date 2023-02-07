import './CSS/App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/articles" element={<Articles/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
