import PropTypes from 'prop-types';
import styles from './Main.module.scss';

const Main = ({ children, customClassName = null }) => {
    return (
      <main 
        className={`${styles.main} ${customClassName ? customClassName : ''}`}
      >
          { children }
      </main>
    )
  }
  
export default Main;

Main.propTypes = {
    children: PropTypes.element.isRequired,
    customClassName: PropTypes.string
};