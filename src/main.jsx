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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </StrictMode>,
)
