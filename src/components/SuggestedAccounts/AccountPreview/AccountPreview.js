import PropTypes from 'prop-types';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles)

function numberFormatter(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}

function AccountPreview({ data = {} }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt=""
                />
                <Button className={cx('btn-follow')} primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <div className={cx('username')}>
                    <span>{data.nickname}</span>
                    {data.tick && <div className={cx('check')}><FontAwesomeIcon icon={faCheckCircle} /></div>}
                </div>
                <p className={cx('name')}>{data.first_name + ' ' + data.last_name}</p>
                <p className={cx('analytics')}>
                    <span className={cx('value')}>{`${numberFormatter(data.followers_count)}`}</span>
                    <span className={cx('label')}>Followers</span>
                    <span className={cx('value')}>{`${numberFormatter(data.likes_count)}`}</span>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>

        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object,
}

export default AccountPreview;