import toast from "react-hot-toast";

// get the book 
export const getRead =()=> {
    const gotBook = localStorage.getItem('readBook');
    if(gotBook){
        return JSON.parse(gotBook)
    }
    return [];
}

export const getWish =()=> {
    const gotBook = localStorage.getItem('wishBook');
    if(gotBook){
        return JSON.parse(gotBook)
    }
    return [];
}

// save in lc 
export const read =(book) =>{
    let storedRead = getRead()
    const exist = storedRead.find(b => b.bookId === book.bookId)
    if(exist){
        return toast.error('All-ready finished', {position:"top-right"})
    }
    let storedWish = getWish()
    const isInWish = storedWish.find(b=>b.bookId === book.bookId)
    if(isInWish){
        const remaining = storedWish.filter(b=> b.bookId !== book.bookId)
        localStorage.setItem('wishBook',JSON.stringify(remaining))
    }
    storedRead.push(book)
    localStorage.setItem('readBook',JSON.stringify(storedRead))
    toast.success('Successfully Added to the List' , {position:"top-right"})
}

export const wishList =(book)=>{
    let checkRead = getRead();
    const readExist = checkRead.find(b=>b.bookId===book.bookId)
    if(readExist){
        return toast.error('All-ready Finished Reading')
    }
    let checkWish = getWish();
    const wishExist = checkWish.find(b=>b.bookId===book.bookId)
    if(wishExist){
        return toast.error("It's already in the wishlist")
    }
    checkWish.push(book);
    localStorage.setItem('wishBook',JSON.stringify(checkWish))
    toast.success('Successfully Added to Wishlist')
}