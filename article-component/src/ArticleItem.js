import React from 'react'

export default class ArticleItem extends React.Component { 
    render() { 
        const { 
            article, 
            onClickToggle, 
            onClickRemove,
        } = this.props

        return (
            <li>
                <a href="#" title="Toggle Summary" onClick={onClickToggle.bind(null, article.id)}>{article.title}</a>
                &nbsp;
                <a href="#" title="Remove" onClick={onClickRemove.bind(null, article.id)}>&#10007;</a>
                <p style={{display: article.display}}>{article.summary}</p>
            </li>
        );
    }
}