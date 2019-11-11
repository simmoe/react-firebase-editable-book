import React, {useState, useEffect, useRef} from 'react'
import firebase from "./firebase"
import { AiOutlineSave } from "react-icons/ai"



const Book = () => {
    const book_id = 'kiZJA2PiPUJAL4yJd7Pg'

    //State variable holding all posts
    const [book, setBook] = useState({})
    const titleRef = useRef()
    const textRef = useRef()

    const initData = () => {
        firebase.firestore().collection('books').doc(book_id).get()
        .then( snapshot => {
            //snapshots.docs gets you an array for each item in the collection
            console.log('reading data now')
            setBook(snapshot.data())
        })    
    }

    useEffect(() => {
        initData()
    }, [])

    const updateBook = () => {
        firebase.firestore().collection('books').doc(book_id).update({
            title : titleRef.current.innerHTML,
            text: textRef.current.innerHTML
        })        
      }
      const createMarkup = () => {
        return {__html: book.text}
      }
    
    return ( 
    <div className = 'book'>
        <div className='save' onClick={updateBook}><AiOutlineSave /></div>
        <h1 contentEditable className='book-title' ref={titleRef}>{book.title}</h1>
        <div contentEditable ref={textRef} className='content' dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
    )

}

export default Book