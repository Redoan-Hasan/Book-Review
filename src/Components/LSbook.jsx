/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const LSbook = ({book}) => {
    const {
        bookId,
        bookName,
        author,
        image,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing}=book
    return (
        <div className="">
            <div className="flex justify-start items-center gap-6 p-6 my-5 border rounded-lg  ">
                <div className="py-8 px-8 rounded-lg bg-[#F3F3F3]">
                    <img className="rounded-xl  h-[144px] bg-[#F3F3F3]" src= {image} />
                </div>
                <div className="w-full">
                    <h1 className="text-2xl font-bold font-playfair">{bookName}</h1>
                    <p className="text-base font-medium text-black font-sans">By : {author}</p>
                    <div className="flex justify-start gap-4 items-center pb-6">
                        <p className="font-sans font-bold text-base">Tag</p>
                        <p className="bg-[#23BE0A0D] py-[7px] px-4 rounded-3xl text-[#23BE0A] font-medium text-base">{tags[0]}</p>
                        <p className="bg-[#23BE0A0D] py-[7px] px-4 rounded-3xl text-[#23BE0A] font-medium text-base">{tags[1]}</p>
                        <p className="bg-[#23BE0A0D] py-[7px] px-4 rounded-3xl text-[#23BE0A] font-medium text-base">{tags[2]}</p>
                        <div className="  flex justify-center  items-center gap-2 font-sans text-base font-normal rounded-3xl">
                            <p className="text-[#131313b2]">Year of Publishing:</p>
                            <p className="font-semibold text-black">{yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 justify-start border-b w-full ">
                        <div className=" pb-3 flex justify-start gap-2 font-sans text-base font-normal rounded-3xl">
                            <p className="text-[#131313b2]">Publisher:</p>
                            <p className="font-semibold text-black">{publisher}</p>
                        </div>
                        <div className="pb-3  flex justify-start gap-2 font-sans text-base font-normal">
                            <p className="text-[#131313b2]">Number of Pages:</p>
                            <p className="font-semibold text-black">{totalPages}</p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-4 items-center pt-6">
                        <p className="bg-[#328eff26] py-[7px] px-4 rounded-3xl text-[#328EFF] font-medium text-base">Category: {category}</p>
                        <p className="bg-[#ffac331f] py-[7px] px-4 rounded-3xl text-[#FFAC33] font-medium text-base">Rating: {rating}</p>
                        <Link to={`/book/${bookId}`} className="bg-[#23BE0A] py-[7px] px-4 rounded-3xl text-white font-medium text-base">View Details</Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default LSbook;