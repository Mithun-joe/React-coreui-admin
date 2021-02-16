import React from 'react'
import useBookSearch from '../useBookSearch';

function TestComponent() {

    const [query, setQuery] = React.useState('')
    const [pageNumber, setpageNumber] = React.useState('')


    const observer = React.useRef()

    const { loading, books, hasMore, error } = useBookSearch(query, pageNumber)

    const handleSearch = e => {
        setQuery(e.target.value);
        setpageNumber(1)
    }


    return (
        <div>
            <input type='text' onChange={handleSearch}></input>
            {books.map(book => (
                <div key={book}>
                    {book}
                </div>
            ))}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </div>
    )
}

export default TestComponent
