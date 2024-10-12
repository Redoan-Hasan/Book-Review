import { useContext, useState } from "react";
import {  Link, Outlet} from "react-router-dom";
import{BookContext} from '../Components/WishListBooks'
import { ReadBookContext } from "../Components/ReadBooks";





const ListedBook = () => {
    const [idx,setIdx]=useState(0)
    const handleReadRating = useContext(ReadBookContext)
    const handleWishRating = useContext(BookContext) 
    
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="bg-[#1313130c] rounded-2xl">
                <h1 className="py-8 text-center font-sans text-3xl font-bold">Book</h1>
            </div>
            <div className="text-center my-10 font-sans ">
                <details className="dropdown ">
                    <summary className="btn m-1 bg-[#23BE0A] text-lg font-semibold hover:bg-[#23BE0A]">Sort By</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-base font-normal">
                        <li><a onClick={()=>{  
                                            // console.log(handleReadRating);
                                            handleReadRating()
                                            handleWishRating()
                                            // console.log(handleWishRating,handleReadRating)

                                            // if (typeof handleReadRating === 'function') {
                                            //     handleReadRating();
                                            // } else {
                                            //     console.error('handleReadRating is not a function');
                                            // }
                                            }}>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <div className="relative">
                    <div className="absolute bottom-0 left-0 w-full border-b-2 border-black"></div>

                    <div className="flex items-center justify-left -mx-4  overflow-x-auto overflow-y-hidden sm:justify-left flex-nowrap relative z-10">
                        <Link to='' onClick={() => setIdx(0)} 
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 font-semibold ${idx === 0 ? 'border-2 border-black border-b-0 rounded-t-lg bg-white z-20' : 'border-b-2 border-transparent'}`}>
                            <span className="">Read Books</span>
                        </Link>

                        <Link to='wishlistbooks' onClick={() => setIdx(1)} 
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 font-semibold ${idx === 1 ? 'border-2 border-black border-b-0 rounded-t-lg bg-white z-20' : 'border-b-2 border-transparent'}`}>
                            <span>Wishlist Books</span>
                        </Link>
                    </div>
                    
                </div>
                <Outlet />
            </div>
        </div>
    );
};
export default ListedBook;