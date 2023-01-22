import useGetAPI from "./useGetAPI";

function useWatchListById(id) {
    const [watchList] = useGetAPI(`https://ot-api.eltak.ir/WatchList/WatchList/${id}`, {})
    return ([watchList])
}
export default useWatchListById;