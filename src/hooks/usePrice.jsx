import useGetAPI from "./useGetAPI";
function usePrice() {
    const [price] = useGetAPI('https://ot-api.eltak.ir/MarketData/Symbol/Price/BTC-USDT', {});
    return ([price])
}
export default usePrice;