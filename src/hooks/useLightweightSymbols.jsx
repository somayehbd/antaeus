import { useEffect, useState } from 'react';
import axios from 'axios';

function useLightweightSymbols() {
    const [lightweightSymbols, setLightweightSymbols] = useState([]);

    useEffect(() => {
        axios.get('https://ot-api.eltak.ir/MarketData/Symbol/Lightweight', {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IiAiLCJnaXZlbl9uYW1lIjoiIiwiZmFtaWx5X25hbWUiOiIiLCJ1c2VyX2lkIjoiYWJiN2Q5ZmYtYWRiZi00YTNjLThlYTktYTJmMWQxODg0NWU3IiwibmJmIjoxNjcyNjg2OTY1LCJleHAiOjE2NzI3NzMzNjUsImlhdCI6MTY3MjY4Njk2NX0._7MCq9gETB3nAXoES4bruIjLms27S4UwJt7BoYkrE-4`
            }
        }).then(
            response => {
                setLightweightSymbols(response.data.data)
            },
            reason => { });
    }, []);

    return ([lightweightSymbols])
}

export default useLightweightSymbols;