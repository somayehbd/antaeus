import queryString from 'query-string'

function SigninResult() {
    const parsed = queryString.parse(window.location.search);
    localStorage.setItem('access_token', parsed.access_token);
    window.location.href = "/";
    return (
        <></>
    )
}
export default SigninResult;