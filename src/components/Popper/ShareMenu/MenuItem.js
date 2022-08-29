import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ShareMenu.module.scss';

const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    return (
        <div className={cx('menu-item')}>

            <span className={cx('icon')}>{data.icon}</span>
            <span className={cx('text')}>{data.title}</span>
        </div>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default MenuItem;