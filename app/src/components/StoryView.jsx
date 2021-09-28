import React from "react";

const StoryView = ({ currentStories = {} }) => {
    return (
        <div className="stories-view container">
            <div className="stories col-12">
                <h4 className="stories__header">Stories</h4>
                <ul className="stories__list">
                    {currentStories && currentStories.stories.map((story, index) => (

                        <li className="story-card">
                            <div className="story__content">
                                <div className="story__details">
                                    <h4>{story.title}</h4>
                                    <div>Author: <span>{story.author.name}</span></div>
                                    <div>Word count: <span>{story.words_count}</span></div>
                                    <div>Summary: {story.summary && story.summary.sentences.map((senetence, index) => (
                                        <span> {senetence}</span>
                                    ))}</div>
                                    {/* <div>Location: <span>Spain</span></div> */}
                                </div>
                                <div className="story_image">
                                    <img className="story__thumbnail" src={story.media[0] ? story.media[0].url : '/media-placeholder.png'} alt="media-img"></img>

                                </div>
                            </div>
                        </li>))}
                </ul>
            </div>
        </div>
    )
};

export default StoryView;