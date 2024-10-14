import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Pages/Root';
import Home from './Pages/Home';
import ListedBook from './Pages/ListedBook';
import BookDetails from './Pages/bookDetails';
import { Toaster } from 'react-hot-toast';
import ReadBooks from './Components/ReadBooks';
import WishListBooks from './Components/WishListBooks';
import PagesToRead from './Pages/PagesToRead';
import { HelmetProvider } from 'react-helmet-async';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:'/',
        element:<Home />,
        loader:()=>fetch('/FakeData.json')
      },
      {
        path:'/books',
        element:<ListedBook />,
        children:[
          {
            path:'',
            element:<ReadBooks />
          },
          {
            path:'wishlistbooks',
            element:<WishListBooks />
          }
        ]
      },
      {
        path:'/book/:id',
        element: <BookDetails />,
        loader:async({params})=>{
          const response=await fetch('/FakeData.json')
          const books = await response.json();
          const book = books.find(book => book.bookId === params.id)
          return book;
        }
      },
      {
        path:'/pages',
        element:<PagesToRead />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </HelmetProvider>
      
  </StrictMode>,
)
