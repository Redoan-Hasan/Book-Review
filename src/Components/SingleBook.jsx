/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";


const SingleBook = ({book}) => {
    const {bookId,bookName,image,author,tags,rating,category}=book
    return (
        <div>
            <Link to={`/book/${bookId}`} className="card bg-base-100  border">
                <div className="pt-6 px-6 pb-2">
                    <figure className="py-8 px-8 rounded-lg bg-[#F3F3F3]">
                        <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl  h-[144px] bg-[#F3F3F3] " />
                    </figure>
                    <div className="flex items-center gap-2 mt-6 ">
                        <p className="bg-[#23BE0A0D] py-[7px] px-4 rounded-3xl text-[#23BE0A] font-medium text-base">{tags[0]}</p>
                        <p className="bg-[#23BE0A0D] py-[7px] px-4 rounded-3xl text-[#23BE0A] font-medium text-base">{tags[1]}</p>
                        <p className="bg-[#23BE0A0D] py-[7px] px-4 rounded-3xl text-[#23BE0A] font-medium text-base">{tags[2]}</p>
                    </div>
                </div>
                
                <div className="card-body pt-2 pb-4">
                    <h2 className="card-title text-2xl font-bold text-black font-playfair">{bookName}</h2>
                    <p className="text-base font-medium text-black font-sans">By : {author}</p>
                    <div className="border border-dashed my-5"></div>
                    <div className="flex justify-between items-center text-base font-medium font-sans text-black">
                        <p>{category}</p>
                        <p className="text-right flex justify-end items-center gap-1">{rating} <span><FaRegStar /></span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleBook;