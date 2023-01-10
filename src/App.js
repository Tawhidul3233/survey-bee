import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routes/Router';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto ">
     <RouterProvider router={ router }></RouterProvider>
    </div>
  );
}

export default App;
