import { useLoaderData } from "react-router-dom";
import { read, wishList } from "../Utilities/LStorage";
import { Helmet } from "react-helmet-async";


const BookDetails = () => {
    const book = useLoaderData()
    if (!book) {
        return <div>Book not found.</div>;
    }
    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing}=book
    const handleReadBtn =(book)=>{
        read(book);
    }
    const handleWishBtn=(book)=>{
        wishList(book);
    }
    return (
        <div className="max-w-screen-xl mx-auto py-14">
            <Helmet>
                <title>Book Detail | {bookName}</title>
            </Helmet>
            <div className="flex gap-12 justify-between items-center">
                <div className="w-2/4 ">
                    <img className="bg-[#F3F3F3] p-[70px] rounded-lg h-[677px]" src={image} alt="" />
                </div>
                <div className="w-2/4">
                    <h1 className="font-playfair text-4xl font-bold text-black">{bookName}</h1>
                    <p className="font-sans text-xl font-medium py-4">By : {author}</p>
                    <p className="ont-sans text-xl font-medium py-4 border-b border-t">{category}</p>
                    <p className="py-6 font-sans font-bold text-base">Review: <span className="font-medium text-[#131313b2]">{review}</span></p>
                    <div className="flex justify-start gap-4 items-center pb-6">
                        <p className="font-sans font-bold text-base">Tag</p>
                        <p className="bg-[#23BE0A0D] py-[7px] px-4 rounded-3xl text-[#23BE0A] font-medium text-base">{tags[0]}</p>
                        <p className="bg-[#23BE0A0D] py-[7px] px-4 rounded-3xl text-[#23BE0A] font-medium text-base">{tags[1]}</p>
                        <p className="bg-[#23BE0A0D] py-[7px] px-4 rounded-3xl text-[#23BE0A] font-medium text-base">{tags[2]}</p>
                    </div>
                    <div className="pt-6 pb-3 border-t flex justify-start gap-14 font-sans text-base font-normal">
                        <p className="text-[#131313b2]">Number of Pages:</p>
                        <p className="font-semibold text-black">{totalPages}</p>
                    </div>
                    <div className=" pb-3 flex justify-start gap-[115px] font-sans text-base font-normal rounded-3xl">
                        <p className="text-[#131313b2]">Publisher:</p>
                        <p className="font-semibold text-black">{publisher}</p>
                    </div>
                    <div className=" pb-3 flex justify-start gap-14 font-sans text-base font-normal rounded-3xl">
                        <p className="text-[#131313b2]">Year of Publishing:</p>
                        <p className="font-semibold text-black">{yearOfPublishing}</p>
                    </div>
                    <div className=" pb-3 flex justify-start gap-[135px] font-sans text-base font-normal rounded-3xl">
                        <p className="text-[#131313b2]">Rating:</p>
                        <p className="font-semibold text-black">{rating}</p>
                    </div>
                    <div className="flex gap-4 pt-6">
                    <button onClick={()=>handleReadBtn(book)} className="btn text-lg text-white font-bold bg-[#23BE0A] hover:bg-[#23BE0A]">Read</button>
                    <button onClick={()=>handleWishBtn(book)} className="btn text-lg text-white font-bold hover:bg-[#59C6D2] bg-[#59C6D2]">Wishlist</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;