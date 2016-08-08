import { connect } from 'react-redux';
import ArticleGroup from '../components/ArticleGroup';

const mapStateToProps = ({ articles, articleGroups }, { id }) => {
  return {
    groupId: id,
    articles: articleGroups.get(String(id)).map(articleId => articles[articleId])
  };
}

export default connect(mapStateToProps)(ArticleGroup);
