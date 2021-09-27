import React from 'react';

const SearchBox = () => (
    <header>

        <div class="px-3 py-2 mb-3">
            <div class="search-box container d-flex flex-wrap justify-content-center">
                <form class="col-10 mb-2 mb-lg-0 me-lg-auto">
                    <input type="search" class="fa form-control search-input" placeholder="&#xF002; Companies, Organizations, People or Places" aria-label="Search" />
                </form>

                <div class="text-end">
                    <button type="button" class="btn btn-search text-dark me-2">Search</button>
                </div>
            </div>
        </div>
    </header>
);

export default SearchBox;