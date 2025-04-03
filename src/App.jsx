import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Home } from './Pages/Home';
import NotFound from './Pages/NotFound';

const  router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '*',
    element: <NotFound/>
  },

  
])
function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App
