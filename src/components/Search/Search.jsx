import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import style from "./Search.module.css"

function Search() {
    return (
        <>
            <div className={style.search}>
                <Typeahead
                    id="symbolId"
                    labelKey='symbolId'
                    placeholder="Choose a symbol ..."
                    size='sm'
                />
            </div>
        </>
    )

}
export default Search;