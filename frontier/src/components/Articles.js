import React from 'react';
import Article from './Article';
import ArticleSection from './ArticleSection';
import '../css/Articles.css';

class Articles extends React.Component {
  chunkArticles(articles) {
    const chunkSize = 2;
    const chunks = [];
    let i = 0;
    while(i < articles.length) {
      chunks.push(articles.slice(i, i += chunkSize));
    }
    return chunks;
  }
  render() {
    const chunks = this.chunkArticles(this.props.articles);
    return (
      <section className="Articles">
        {
          chunks.map((articles, i) => (
            <ArticleSection key={ i }>
              {
                articles.map((article, i) => (
                  <Article key={ i } { ...article } />
                ))
              }
            </ArticleSection>
          ))
        }
      </section>
    );
}
};

Articles.propTypes = {
  articles: React.PropTypes.arrayOf(
    React.PropTypes.shape(Article.propTypes)
  )
};

export default Articles;
