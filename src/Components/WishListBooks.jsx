import { createContext,  useEffect, useState } from "react";
import { getWish } from "../Utilities/LStorage";
import LSbook from "./LSbook";


export const BookContext = createContext(null)
const WishListBooks = () => {
    
    const [data,setdata]=useState([])
    // console.log(data);
    useEffect(()=>{
        const savedWishBooks = getWish();
        setdata(savedWishBooks)
    },[])
    
    // const handleWishRating=()=>{
    //     const sortedWish = [...data].sort((a,b)=>{return b.rating - a.rating})
    //     setdata(sortedWish)
    // }

    const handleWishRating = () => {
        // console.log("Before sorting:", data);
        const sortedWish = [...data].sort((a, b) => b.rating - a.rating);
        // console.log("After sorting:", sortedWish);
        return setdata(sortedWish);
        // console.log(handleWishRating());
    };
    
    return (
        <BookContext.Provider value={handleWishRating}>
            <div className="my-10">
            {
                data.map((book,idx)=><LSbook key={idx} book={book} />)
            }
        </div>
        </BookContext.Provider>
    );
};

export default WishListBooks;