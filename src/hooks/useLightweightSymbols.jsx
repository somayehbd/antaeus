import useGetAPI from "./useGetAPI";

function useLightweightSymbols() {
    const [lightweightSymbols] = useGetAPI('https://ot-api.eltak.ir/MarketData/Symbol/Lightweight', []);
    return ([lightweightSymbols]);
}

export default useLightweightSymbols;