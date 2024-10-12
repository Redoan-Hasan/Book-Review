import { createContext, useEffect, useState } from "react";
import { getRead } from "../Utilities/LStorage";
import LSbook from "./LSbook";

export const ReadBookContext = createContext(()=>{})

const ReadBooks = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        const savedReadBooks = getRead()
        setData(savedReadBooks)
    },[])
    // console.log(data);
    // const handleReadRating=()=>{
    //     const sortedRead = [...data].sort((a,b)=>{return b.rating - a.rating});
    //     setData(sortedRead)
    // }
    const handleReadRating = () => {
        // console.log("Before sorting:", data);
        const sortedRead = [...data]
        console.log(sortedRead);
        const sortedToChange= sortedRead.sort((a, b) => b.rating - a.rating);
        console.log(sortedToChange);
        // console.log("After sorting:", sortedRead);
        setData(sortedToChange);
    };
    
    return (
        <ReadBookContext.Provider value={handleReadRating}>
            <div>
                <div className="my-10">
                    {
                        data.map((book,idx)=><LSbook  key={idx} book={book} />)
                    }
                </div>
            </div>
        </ReadBookContext.Provider>
    );
};

export default ReadBooks;