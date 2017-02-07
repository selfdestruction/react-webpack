import React from 'react';

export const News = React.createClass({
    render: function () {
        let newsTemplate = this.props.data.map((item, index) => {
            return(
                <div key={index}>
                    <p className="news_author"> {item.author}:</p>
                    <p className="news_text"> {item.text}</p>
                </div>
            );
        });
        return (
            <div className="news">
                {newsTemplate}
            </div>
        );

    }
});
