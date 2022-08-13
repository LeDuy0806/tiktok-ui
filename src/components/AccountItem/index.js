import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c1cccc96eb11a5baa68e839f56b6717d.jpeg?x-expires=1660550400&x-signature=BBtTOP0r271wpncFWCH426dStU0%3D"
                alt="avatar" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    satthucuonglike.196
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Sat Thu Cuong Like</span>
            </div>
        </div>
    );
}

export default AccountItem;