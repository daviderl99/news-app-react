import {Route, BrowserRouter, Routes} from 'react-router-dom';
import ViewNews from './pages/ViewNews.jsx';
import EditNews from './pages/EditNews.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" exact element={<ViewNews />} />
            <Route path="/edit" exact element={<EditNews />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;