import { BrowserRouter, useRoutes } from 'react-router-dom';
import ViewNews from './pages/ViewNews.js';
import EditNews from './pages/EditNews.js';
import './App.css';

const AllRoutes = () => useRoutes([
  { path: "/", element: <ViewNews /> },
  { path: "/news", element: <ViewNews /> },
  { path: "/news/:id", element: <EditNews /> }
]);

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <AllRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;