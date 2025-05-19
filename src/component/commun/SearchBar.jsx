import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const handelSearchToggle = () => {
        setIsOpen(!isOpen)
    }
    const handelSearch =(e) =>{
        e.preventDefault()
        console.log(searchTerm)
        setIsOpen(false)

    }

    return (
        <div className={` flex justify-center item-center w-full transition-all duration-300 ${isOpen ? 'absolute top-0 left-0 bg-white h-24 z-50  ' : 'w-auto'}`}>
            {isOpen ? (
                <form className='relative flex items-center justify-center w-full border-b border-gray-200 ' onSubmit={handelSearch}>
                    <div className='relative w-1/2'>
                        <input
                            placeholder='Search' value={searchTerm} type='text'
                            className=' bg-gray-100 rounded-lg px-4 py-2 focus:outline-none placeholder:text-gray-700 w-full '
                            onChange={(e)=> setSearchTerm(e.target.value)}
                        />
                        {/* search Icons */}
                        <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                            <HiMagnifyingGlass className='h-6 w-6 text-gray-700 hover:text-black' />
                        </button>
                    </div>
                    <button type='button' onClick={handelSearchToggle}>
                        <HiMiniXMark className='absolute h-6 w-6 right-4 top-1/2 transform -translate-y-1/2' />
                    </button>
                </form>
            ) : (
                <button onClick={handelSearchToggle}>
                    <HiMagnifyingGlass className='h-6 w-6 text-gray-700 hover:text-black' />
                </button>
            )}

        </div>
    )
}

export default SearchBar