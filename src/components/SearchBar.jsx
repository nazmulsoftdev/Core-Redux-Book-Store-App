import React,{useContext} from 'react';
import {TextInput} from 'flowbite-react';
import {CiSearch as SearchIcon} from 'react-icons/ci'
import { ContextAPI } from '../context/Context';

function SearchBar() {
  const { search, SearchHandler } = useContext(ContextAPI);
  return (
    <div className='relative'>
      <TextInput placeholder='Search here' value={search} onChange={SearchHandler} />
      <SearchIcon size={20} className='absolute top-3 right-2' />
    </div>
  )
}

export default SearchBar