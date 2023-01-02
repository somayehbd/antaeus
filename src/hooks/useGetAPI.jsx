import { useEffect, useState } from 'react';
import axios from 'axios';

function useGetAPI(apiUrl, defaultValue) {
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IiAiLCJnaXZlbl9uYW1lIjoiIiwiZmFtaWx5X25hbWUiOiIiLCJ1c2VyX2lkIjoiYWJiN2Q5ZmYtYWRiZi00YTNjLThlYTktYTJmMWQxODg0NWU3IiwibmJmIjoxNjcyNjkwOTU0LCJleHAiOjE2NzI3NzczNTQsImlhdCI6MTY3MjY5MDk1NH0.bxypB8WHpet63Hk_DZ7S01ayNC3z6j6yaWJ5-ukWhu8`
            }
        }).then(
            response => {
                setData(response.data.data)
            },
            reason => { });
    }, []);

    return ([data])
}
export default useGetAPI;