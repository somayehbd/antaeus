import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';
import React, { useState } from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import style from "./Search.module.css"

function Search() {
    const [symbolIds, setSymbolIds] = useState([]);

    axios.get('https://ot-api.eltak.ir/MarketData/Symbol/Lightweight', {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IiAiLCJnaXZlbl9uYW1lIjoiIiwiZmFtaWx5X25hbWUiOiIiLCJ1c2VyX2lkIjoiYWJiN2Q5ZmYtYWRiZi00YTNjLThlYTktYTJmMWQxODg0NWU3IiwibmJmIjoxNjcyNjE0NTcyLCJleHAiOjE2NzI3MDA5NzIsImlhdCI6MTY3MjYxNDU3Mn0.YCgagQKU5kSZt2dyLVxVKMG2YpQHhb2wbDp-0uk9F4w`
        }
    }).then(
        response => {
            setSymbolIds(response.data.data)
        },
        reason => { });
    return (
        <>
            <div className={style.search}>
                <Typeahead
                    id="symbolId"
                    labelKey='symbolId'
                    options={symbolIds}
                    placeholder="Choose a symbol ..."
                    size='sm'
                />
            </div>
        </>
    )

}
export default Search;