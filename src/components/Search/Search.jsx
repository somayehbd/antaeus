import { Typeahead } from 'react-bootstrap-typeahead';
import CONFIG from '../../config';
import { useState, useEffect } from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import style from "./Search.module.css"

function Search() {

    const [symbolIds, setsymbolIds] = useState([]);

    useEffect(() => {
        fetch(`${CONFIG.BASE_ADDRESS}/MarketData/Symbol/Lightweight`)
            .then(response => {
                return response.json();
            })

            .then(data => {

                setsymbolIds(data.data)

            })

            .catch(error => {
                console.log('eroooor')

            })
    }, []);

    return (
        <>
            <div className={style.search}>
                <Typeahead
                    id=""
                    labelKey={option => `${option.symbolId}`}
                    options={symbolIds}
                    placeholder="Choose a symbol ..."
                    size='sm'
                />  
            </div>
        </>
    )

}
export default Search;