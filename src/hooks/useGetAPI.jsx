import { useEffect, useState } from 'react';
import axios from 'axios';

function useGetAPI(apiUrl, defaultValue) {
    const [data, setData] = useState(defaultValue);
    const token = localStorage.getItem("access_token");
    useEffect(() => {
        axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(
            response => {
                setData(response.data.data)
            },
            reason => {
                if (reason.response.status == 401)
                    window.location.href = "https://ot-api.eltak.ir/bff/login";
            });
    }, []);

    return ([data])
}
export default useGetAPI;