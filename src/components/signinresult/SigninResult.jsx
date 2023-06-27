function SigninResult() {

    // get Query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');
    localStorage.setItem('Token', accessToken);
    window.location.href = ('http://localhost:3000/');
    return (
        <>

        </>
    )
}
export default SigninResult;