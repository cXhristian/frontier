import { connect } from 'react-redux';
import ArticleGroup from '../components/ArticleGroup';

const mapStateToProps = ({ articles, articleGroups }, { id }) => {
  const articlesInGroup = articleGroups.get(String(id))
    .map(articleId => articles[articleId]).toJS();
  return {
    groupId: id,
    articles: articlesInGroup
  };
}

export default connect(mapStateToProps)(ArticleGroup);
