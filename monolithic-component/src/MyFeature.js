import React,  {Component} from react;

import cuid from  'cuid'

import {fromJS} from 'immutable'


export default class MyFeature extends Component { 
    state = { 
        data: fromJS({
            articles: [
                {
                    id: cuid(),
                    title: 'Article 1',
                    summary: 'Article 1 Summary',
                    display: 'none',
                },
                {
                    id: cuid(),
                    title: 'Article 2',
                    summary: 'Article 2 Summary',
                    display: 'none',
                },
                {
                    id: cuid(),
                    title: 'Article 3',
                    summary: 'Article 3 Summary',
                    display: 'none',
                },
                {
                    id: cuid(),
                    title: 'Article 4',
                    summary: 'Article 4 Summary',
                    display: 'none',
                }, 
            ],
            title: '',
            summary: '',
        })
    }
}

onChangeTitle = (e) => {
    this.data = this.data.set(
        'title',
        e.target.value,
    );
}

onChangeSummary = (e) => { 
    this.data = this.data.set(
        'summary',
        e.target.value
    );
}

onClickAdd = () => { 
    this.data = this.data.update(
        'articles', 
        a => a.push( 
            fromJS({
                id: cuid(), 
                title: this.data.get('title'),
                summary: this.data.get('summary'),
                display: 'none',
            })
        )
    )
}

onClickToggle = (id) => { 
    const index = this.data
    .get('articles')
    .findIndex(
        a=> a.get('id') === id
    );
    this.data = this.data
    .update(
        'articles', 
        articles => articles.update(
            index, 
            a => a.set('display') ? '' : 'none'
        )
    );
}

get data() { 
    return this.state.data;
}

set data(data) { 
    this.setState({data});
}

render() { 
    const { 
        articles, 
        title,
        summary
    } = this.data.toJS();

    return (
        <section>
            <header>
                <h1>Art</h1>
            </header>
        </section>
    )
}