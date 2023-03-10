import { Typeahead } from 'react-bootstrap-typeahead';
import useLightweightSymbols from '../../hooks/useLightweightSymbols';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import style from "./Search.module.css"

function Search() {
    const [lightweightSymbols] = useLightweightSymbols();

    return (
        <>
            <div className={style.search}>
                <Typeahead
                    id="symbolId"
                    labelKey='symbolId'
                    options={lightweightSymbols}
                    placeholder="Choose a symbol ..."
                    size='sm'
                />
            </div>
        </>
    )

}
export default Search;