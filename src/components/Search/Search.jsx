import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import style from "./Search.module.css"

function Search() {
    var options = [
        { id: 1, label: 'BTC-USDT' },
        { id: 2, label: 'ETC-USDT' },
        { id: 3, label: 'PRE-USDT' },
        { id: 4, label: 'APT-USDT' },
    ];

    return (
        <>
            <div className={style.search}>
                <Typeahead
                    id="symbolId"
                    labelKey='label'
                    options={options}
                    placeholder="Choose a symbol ..."
                    size='sm'
                />
            </div>
        </>
    )

}
export default Search;