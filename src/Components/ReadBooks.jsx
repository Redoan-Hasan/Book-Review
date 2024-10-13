/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { getRead } from "../Utilities/LStorage";
import LSbook from "./LSbook";
import { ListBookContext } from "../Pages/ListedBook";



const ReadBooks = () => {
    const rating = useContext(ListBookContext)
    // console.log(rating)

    // const rating =useContext(RatingContext)
    // const page = useContext(PageContext)
    // const publisher = useContext(PublisherContext)
    // console.log(rating,page,publisher);

    
    // const [isSorted, setIsSorted] = useState(false); 
    // const [sortData,setSortedData]=useState([])
    const [data,setData]=useState([])
    useEffect(()=>{
        const savedReadBooks = getRead()
        setData(savedReadBooks)
    },[])

//     useEffect(()=>{
//         if(rating || page || publisher){
//             let sortedData = [...data]
//         if(rating === "rating"){
//             sortedData.sort((a,b)=> b.rating - a.rating)
//         }
//         else if(page === 'page'){
//             sortedData.sort((a,b)=>b.totalPages - a.totalPages)
//         }
//         else if(publisher === 'publisher'){
//             sortedData.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing)
//         }
//         setSortedData(sortedData)
//         setIsSorted(true)
//     }
// },[rating,page,publisher])

    if(rating === "rating"){
        data.sort((a,b)=> b.rating - a.rating)
    }
    else if(rating === 'page'){
        data.sort((a,b)=>b.totalPages - a.totalPages)
    }
    else if(rating === 'publisher'){
        data.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing)
    }
    
    return (
        
            <div>
                
                    <div className="my-10">
                        {
                            data.map((book,idx)=><LSbook  key={idx} book={book} />)
                        }
                    </div>
            </div>
        
    );
};

export default ReadBooks;

























// const handleReadRating = () => {
//     // console.log("Before sorting:", data);
//     const sortedRead = [...data]
//     console.log(sortedRead);
//     const sortedToChange= sortedRead.sort((a, b) => b.rating - a.rating);
//     // console.log("After sorting:", sortedRead);
//     setData(sortedToChange);
// };