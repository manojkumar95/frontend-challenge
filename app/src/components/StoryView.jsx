import React from "react";

const StoryView = () => (
    <div className="stories-view container">

        <div className="stories col-12">
            <h4 className="stories__header">Stories</h4>
            <ul className="stories__list">
                <li className="story-card">
                    <div className="story__content">
                        <div className="story__details">
                            <h4>story 1</h4>
                            <div>Total stories: <span>1</span></div>
                            <div>Earliest story: <span>14-09-2020</span></div>
                            <div>Latest story: <span>14-09-2020</span></div>
                            <div>Location: <span>Spain</span></div>
                        </div>
                        <div className="story_image">
                            <img className="story__thumbnail" src='/media-placeholder.png' alt="media-img"></img>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
);

export default StoryView;