import useGetAPI from "./useGetAPI";
function useOrderbook() {
    const [orderbook] = useGetAPI('https://ot-api.eltak.ir/MarketData/Bestlimit/BTC-USDT', {});
    return ([orderbook])
}
export default useOrderbook;