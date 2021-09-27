import React from 'react';
import Header from './components/Header';
import StoryView from './components/StoryView';
import SearchBox from './components/SearchBox';

function App() {
  const stories = []
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <StoryView />
    </div>
  );
}

export default App;
