import React from 'react';
import AsyncSelect from 'react-select/async';
const SearchBox = ({  getAutocompleteResult, getUpdatedStories, currentSearchResults }) => {
    return (
        <header>

            <div className="px-3 py-2 mb-3">
                <div className="search-box container d-flex flex-wrap justify-content-center">
                    <div className="col-12 mb-2 mb-lg-0 me-lg-auto">
                        <AsyncSelect
                            loadOptions={getAutocompleteResult}
                            placeholder={"Select...."}
                            defaultOptions={currentSearchResults}
                            options={currentSearchResults}
                            onChange={getUpdatedStories}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
};

export default SearchBox;