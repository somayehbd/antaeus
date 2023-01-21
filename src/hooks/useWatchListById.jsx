import useGetAPI from "./useGetAPI";

function useWatchListById() {
    const [watchList] = useGetAPI('https://ot-api.eltak.ir/WatchList/WatchList/1', {})
    return ([watchList])
}
export default useWatchListById;