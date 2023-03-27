import React from 'react'
import AddBookForm from '../components/AddBookForm'
import Book from '../components/Book'

function BookPage() {
  return (
    <div className='md:grid md:grid-cols-5 md:gap-8 md:mt-5'>
        <div className='col-span-3'>
         <Book />
        </div>
        <div className='col-span-2 '>
           <AddBookForm />
        </div>
    </div>
  )
}

export default BookPage