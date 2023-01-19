import useGetAPI from "./useGetAPI"

function useOrderReport() {
    const [orderReport] = useGetAPI('https://ot-api.eltak.ir/OrderManagement/Order', [])
    return ([orderReport])
}
export default useOrderReport;
