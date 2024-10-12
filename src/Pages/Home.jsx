import { useLoaderData } from "react-router-dom";
import SingleBook from "../Components/SingleBook";


const Home = () => {
    const books = useLoaderData();
    
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center bg-[#1313130C] gap-20 rounded-3xl py-[100px] px-[120px]">
                <div>
                    <h1 className="font-playfair text-6xl font-bold leading-[84px]">Books to freshen up your bookshelf</h1>
                    <button className="lg:mt-11 rounded-lg font-sans text-xl py-[21px] px-[28px] text-white font-bold bg-[#23BE0A] hover:bg-[#23BE0A]">View The List</button>
                </div>
                <div className="w-2/5">
                    <img src="src/assets/pngwing 1.png" alt="" />
                </div>
            </div>
            <div className="mb-28">
                <h1 className="text-center font-playfair font-bold text-4xl mt-24 mb-8">Books</h1>
                <div className="grid grid-cols-3 gap-14 max-w-screen-xl mx-auto">
                    {
                        books.map((book,idx)=> <SingleBook book={book} key={idx}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;