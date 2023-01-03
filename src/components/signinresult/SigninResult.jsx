import axios from 'axios';
import queryString from 'query-string'

function SigninResult() {
    const parsed = queryString.parse(window.location.search);
    const axiosOptions = {
        headers: {
            'Authorization': `Bearer ${parsed.access_token}`
        }
    }

    // Get customer info
    axios.get('https://ot-api.eltak.ir/User/CustomerInfo', axiosOptions).then(
        customerApiResponse => {
            const customerInfo = customerApiResponse.data.data;

            // Get customer trading code info
            axios.get('https://ot-api.eltak.ir/User/CustomerTradingCodeInfo', axiosOptions).then(customerTradingCodeApiResponse => {
                const customerTradingCodeInfo = customerTradingCodeApiResponse.data.data;

                localStorage.setItem('CustomerInfo', JSON.stringify(customerInfo));
                localStorage.setItem('CustomerTradingCodeInfo', JSON.stringify(customerTradingCodeInfo));
                localStorage.setItem('access_token', parsed.access_token);
                window.location.href = "/";
            }, customerTradingCodeApiReason => {
                alert('Signin Failed');
            })
        },
        customerApiReasson => {
            alert('Signin Failed');
        }
    );

    return (
        <></>
    )
}
export default SigninResult;