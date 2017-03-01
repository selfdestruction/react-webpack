import React from 'react';
import ReactDOM from 'react-dom';
import { News } from './ui/news.component';
import { Comments } from './ui/comments.component';


var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

const App = React.createClass({
    render: function () {
        return (
            <div className="app">
                app component
                <News data={my_news} />
                <Comments />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

