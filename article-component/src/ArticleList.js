import React from 'react'
import ArticleItem from  './ArticleItem'

export default class ArticleList extends React.Component {
    render() {
        const {
            articles,
            onClickToggle,
            onClickRemove,
        } = this.props;


        return (
            <ul>
                {articles.map(i => (
                    <ArticleItem key={i.id}
                    article={i}
                    onClickToggle={onClickToggle}
                    onClickRemove={onClickRemove}
                    />

                    // <li key={i.id} >
                    // <a href="#" onClick={onClickToggle.bind(null, i.id)}>{i.title}</a>
                    // &nbsp;
                    // <a href="#" onClick={onClickeRemove.bind(null, i.id)}>&#10007;</a>
                    // <p style={{ display: i.display }}>{i.summary}</p>
                    // </li>
                ))}
            </ul>
        );
    }
}