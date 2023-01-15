import { useEffect, useState } from 'react';
import axios from 'axios';

function useGetAPI(apiUrl, defaultValue) {
    const [data, setData] = useState(defaultValue);
    const token = localStorage.getItem("AccessToken");
    useEffect(() => {
        axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(
            response => {
                if (response.data.status == false) {
                    alert(response.data.errorMessage);
                } else {
                    setData(response.data.data);
                }
            },
            reason => {
                if (reason.response.status == 401)
                    window.location.href = "https://ot-api.eltak.ir/bff/login";
            });
    }, []);

    return ([data])
}
export default useGetAPI;