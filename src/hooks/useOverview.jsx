import useGetAPI from "./useGetAPI"

function useOverview(){
    const[overview]=useGetAPI('https://ot-api.eltak.ir/WalletManagement/Wallet',{})
    return([overview])
}
export default useOverview;