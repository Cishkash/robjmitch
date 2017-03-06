import React, { Component } from 'react';
import 'whatwg-fetch';

/**
 * So this component brings up an interesting issue on whether I would prefer to
 * let the route handles the fetching of data vs the component handling its own
 * data. This is where routeable components really shine since each component
 * can act individually making it more like building blocks. However, there's
 * organization with having all the data fetched from one place. and having the
 * component themselves consume the data as a property.
 *
 * @TODO Blog this.
 *
 * @class Component.ArticleList
 * @extends React.Component
 */
class ArticleList extends Component {
  /**
   * ArticleList construtor. Sets initial state for async data.
   *
   * @event construtor
   * @constructor
   * @return {undefined}
   */
  constructor() {
    super();
    this.state = {
      articles: null
    }
  }
  /**
   * Makes a request to the articles route via backend to fetch the entire
   * articles list. (For now)
   *
   * @TODO Consider adding to the backend articles request to limit the amount
   *       fetched articles.
   *
   * @event componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    fetch(`${process.env.API_URL}/articles`).then(
      (articles) => {
        return articles.json();
        }
      ).then( (articles) => {
        if (articles) {
          this.setState({
            articles: articles
          });
        } else {
          throw new Error(articles.json);
        }
      }
    ).catch(
      (error) => {
        this.setState({
          error: error
        });
      }
    )
  }
  /**
   * Iterates over a list of articles the blogger found interesting and turns
   * them into a link that is displayed on the aside of the blog route.
   *
   * @method iterateArticles
   * @returns {HTML}
   */
  iterateArticles(articles) {
    let articleList = [];

    for (let article in articles) {
      if (article) {
        articleList.push(article);
      }
    }

    return articleList.map( (article) => (
      <a href={articles[article].articleLink} key={article}>{articles[article].title}</a>
    ));
  }
  /**
   * Render event for rendering the layout of the `ArticleList` component.
   *
   * @event render
   * @returns {HTML}
   */
  render() {
    if (!this.state.articles) return null;

    return (
      <div id="ArticleList" className="my-3">
        <strong>Interesting articles:</strong>
        <div className="articles">
          {this.iterateArticles(this.state.articles)}
        </div>
      </div>
    )
  }
}

export default ArticleList;
