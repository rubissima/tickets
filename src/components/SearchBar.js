
import React from 'react';

const SearchBar = ({searchQuery, setSeachQuery}) => {

  const handleSearchInput = (event) => {
    setSeachQuery(event.target.value);
  } 
  console.log(searchQuery);
  return (
    <div className='py-8'>
      <input 
      onChange={ handleSearchInput }
      value={searchQuery}
      type="text" 
      placeholder="Search for events" 
      className="input input-bordered w-full max-w-xs" />
    </div>
  );
};

export default SearchBar;
