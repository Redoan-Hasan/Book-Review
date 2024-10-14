import {  useContext, useEffect, useState } from "react";
import { getWish } from "../Utilities/LStorage";
import LSbook from "./LSbook";
import { ListBookContext } from "../Pages/ListedBook";
import { Helmet } from "react-helmet-async";


const WishListBooks = () => {
    const rating = useContext(ListBookContext)
    const [data,setdata]=useState([])
    useEffect(()=>{
        const savedWishBooks = getWish();
        setdata(savedWishBooks)
    },[])
    if(rating === 'rating'){
        data.sort((a,b)=>b.rating - a.rating)
    }
    else if(rating === 'page'){
        data.sort((a,b)=>b.totalPages - a.totalPages)
    }
    else if(rating === 'publisher'){
        data.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing)
    }


    // const handleWishRating = () => {
    //     // console.log("Before sorting:", data);
    //     const sortedWish = [...data]
    //     console.log(sortedWish);
    //     const sortedWishToChange = sortedWish.sort((a, b) => b.rating - a.rating);
    //     // console.log("After sorting:", sortedWish);
    //     setdata(sortedWishToChange);
    //     // console.log(handleWishRating());
    // };
    // // console.log(handleWishRating);
    
    return (
        <div>
            <Helmet>
                <title>Listed Books | Wishlist</title>
            </Helmet>
            <div className="my-10">
                {
                    data.map((book,idx)=><LSbook key={idx} book={book} />)
                }
            </div>
        </div>
    );
};

export default WishListBooks;