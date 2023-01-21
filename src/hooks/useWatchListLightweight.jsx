import useGetAPI from "./useGetAPI"

function useWatchListLightweight(){
    const [WatchListLightweight]=useGetAPI('https://ot-api.eltak.ir/WatchList/WatchList/Lightweight',[])
    return([WatchListLightweight])

}
export default(useWatchListLightweight)