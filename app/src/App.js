import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import StoryView from './components/StoryView';
import SearchBox from './components/SearchBox';
import search from './apis/search';

function App() {
  const stories = []
  const [currentSearchText, setSelectedSearchText] = useState({});
  const [currentStories, setUpdatedStories] = useState({ stories: [] });
  const [currentSearchResults, setSelectedSearchResults] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const getAutocompleteResult = async (value = 'A') => {
    const result = await search.autocompletes(value)
    const arrayObj = result.autocompletes.map(item => {
      return {
        label: item.text
      };
    });
    setSelectedSearchResults(arrayObj);
    return arrayObj;
  }

  useEffect(() => {
    const searchResults = getAutocompleteResult('A');
    getUpdatedStories('A')
  }, []);

  const getUpdatedStories = async (value = {}) => {
    setSelectedSearchText(value)
    const result = await search.searchStories(value)
    setLoading(false);
    setUpdatedStories(result)
  }


  const fetchPageResults = async () => {
    console.log('currentSearchText', currentSearchText)
    console.log('stories', stories)

    const result = await search.searchStories(currentSearchText, stories.next_page_cursor)
    setUpdatedStories(result)
    setPageCount(pageCount + 1)
  }

  return (
    <div className="App">
      <Header />
      <SearchBox
        currentSearchText={currentSearchText}
        getUpdatedStories={getUpdatedStories}
        getAutocompleteResult={getAutocompleteResult}
        currentSearchResults={currentSearchResults}
      />
      <StoryView
        currentStories={currentStories}
      />
      <nav>
        <ul className="pagination justify-content-center m-4 p-4">
          <li className="page-item"><span className="page-link">{pageCount}</span></li>
          <li className="page-item"><span className="btn page-link" onClick={fetchPageResults}>Next</span></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
