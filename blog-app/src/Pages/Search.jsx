import React from 'react'

const Search = () => {
    const handleSearch = () => {}

    const handleSubmit = () => {}

    const clearSearch = () => {}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            onChange={handleSearch}
            placeholder='Search Category'
            // value={value}
            />
            {/* {value && <span onClick={clearSearch}>x</span>} */}
            <button>Go</button>
        </form>
    </div>
  )
}

export default Search;