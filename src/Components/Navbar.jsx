import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto flex justify-between items-center h-12 py-[56px]">
                <div>
                    <h1 className="text-black font-sans text-3xl font-bold">Book Vibe</h1>
                </div>
                <div className="flex gap-4  font-sans ">
                    <NavLink to='/' className={({isActive})=>`btn text-lg font-bold hover:text-black hover:bg-[#23BE0A] ${isActive?"border border-[#23BE0A] text-[#23BE0A]":" "}`}>Home</NavLink>
                    <NavLink to='/books' className={({isActive})=>`btn text-lg font-bold hover:text-black hover:bg-[#23BE0A] ${isActive?"border border-[#23BE0A] text-[#23BE0A]":" "}`}>Listed Books</NavLink>
                    <NavLink to='/pages' className={({isActive})=>`btn text-lg font-bold hover:text-black hover:bg-[#23BE0A] ${isActive?"border border-[#23BE0A] text-[#23BE0A]":" "}`}>Pages to Read</NavLink>
                </div>
                <div className="flex gap-4 ">
                    <button className="btn text-lg text-white font-bold bg-[#23BE0A] hover:bg-[#23BE0A]">Sign In</button>
                    <button className="btn text-lg text-white font-bold hover:bg-[#59C6D2] bg-[#59C6D2]">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;