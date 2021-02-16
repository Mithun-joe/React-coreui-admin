import React, { useEffect, useState } from 'react'
import axios from 'axios'


function useBookSearch(query, pageNumber,) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setBooks([])
    }, [query])


    useEffect(() => {
        setLoading(true);
        setError(false);

        let cancel;
        axios({
            meathod: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
            .then(res => {
                setBooks(prevBooks => {
                    return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]
                })
                setHasMore(res.data.docs.length > 0);
                setLoading(false);
            })
            .catch(err => {
                if (axios.isCancel(err)) return
                setError(true)
            })

        return () => cancel()

    }, [query, pageNumber])

    return { loading, error, hasMore, books }
}

export default useBookSearch
