import {Route, BrowserRouter, Routes} from 'react-router-dom';
import ViewNews from './pages/ViewNews.js';
import EditNews from './pages/EditNews.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/news" exact element={<ViewNews />} />
            <Route path="/news/:id" exact element={<EditNews />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;