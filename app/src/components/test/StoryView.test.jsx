import React from 'react';
import { render } from '@testing-library/react';
import StoryView from '../StoryView';
import { stories } from './fixtures';

describe('Story', () => {

  const renderComponent = () => render(
      <StoryView currentStories={stories} />
  );

  it('should render correctly with selected item', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
}); 