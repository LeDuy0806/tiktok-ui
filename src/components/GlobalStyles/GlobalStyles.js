import PropTypes from 'prop-types';
import './GlobalSyles.scss';

function GlobalSyles({ children }) {
  return children;
}

GlobalSyles.propTypes = {
  children: PropTypes.node.isRequired,
}
export default GlobalSyles;

