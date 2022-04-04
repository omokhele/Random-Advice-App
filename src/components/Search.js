import { randomSearch } from "../services/constants";
import { useState, useEffect } from 'react';

function Search() {
    
        const [searchResults, setSearchResults] = useState([]);
        const [query, setQuery] = useState('');
    
        function handleChange(event) {
            event.preventDefault();
            setQuery(event.target.value);
        }

        async function handleClick(event) {
            // event.preventDefault()
            let answer = await randomSearch(query);
            answer ? (setSearchResults(answer.data.slips)) : (setSearchResults(answer.message))
            console.log(answer.data)
        }

        useEffect(() => {
            // handleClick();
            // handleChange();
        }, [])

        // const renderSearchResults = () => {
        //     return searchResults.map((searchResult, index) =>{
        //         return (
        //         <p>{searchResult} {index}</p>   
        //         )
        //     })
        // }

    return (
        <div className="search">
            <input type="text" placeholder="Need Advice?" onChange = {((event) => handleChange(event))}/>
            <input type="button" value="Click Here!" onClick = {(() => handleClick())} />
            {
                searchResults.map((searchResult, index) => {
                    return <p className="results">{searchResult.advice} {index.id}</p> 
                })
            }
        </div>
    )
}
export default Search