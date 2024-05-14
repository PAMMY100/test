import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Cart from './pages/Cart'
import Authentication from './pages/Authentication'


const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    children: [
      { index : true, element: <Homepage />,},
      { path: 'gallery', element: <Gallery />},
      {path: 'about', element: <About />},
      {path: 'contact', element: <Contact />},
      {path: 'auth', element: <Authentication />},
      {path: 'cart', element: <Cart/>}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App