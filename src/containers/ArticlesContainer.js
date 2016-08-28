import { connect } from 'react-redux';
import Articles from '../components/Articles';

const mapStateToProps = ({ groupOrder }) => {
  return {
    articleGroups: groupOrder
  }
}

export default connect(mapStateToProps)(Articles);
