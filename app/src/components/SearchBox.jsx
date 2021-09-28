import React, { useEffect, useState } from 'react';
import AsyncSelect, { makeAsyncSelect } from 'react-select/async';
import search from '../apis/search';
const SearchBox = ({ props }) => {
    const [loading, setLoading] = useState(false);

    const getData = async (value) => {
        const result = await search.search(value)
        console.log('result', result);
        setLoading(false);
        const arrayObj = result.autocompletes.map(item => {
            return {
              label: item.text
            };
          });
        return arrayObj;
    }

    return (
        <header>

            <div className="px-3 py-2 mb-3">
                <div className="search-box container d-flex flex-wrap justify-content-center">
                    <div className="col-10 mb-2 mb-lg-0 me-lg-auto">
                        <AsyncSelect
                            loadOptions={getData}
                            placeholder={"Select...."}
                            defaultOptions={[{ id: 0, label: "Loading..." }]}
                        />
                    </div>

                    <div className="text-end">
                        <button type="button" className="btn btn-search text-dark me-2">Search</button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default SearchBox;