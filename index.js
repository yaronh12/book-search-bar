import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const reactContentRoot = document.getElementById("root");

const SearchBar = () => {
  const[searchValue,setSearchValue]=useState("the search value");
const handleInputChange=(event)=>{
    setSearchValue(event.target.value)
}

  return(
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange}></input>
    </div>
  )
}

ReactDOM.render(<SearchBar/>,reactContentRoot);

