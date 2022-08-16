
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1660831200&x-signature=qhnfCv2ORkBJqtnE6ePd9vBDIZM%3D"
                    alt=""
                />
                <Button className={cx('btn-follow')} primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <div className={cx('username')}>
                    <span>hoaa.hanassii</span>
                    <div className={cx('check')}><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
                <p className={cx('name')}>Đào Lê Phương Hoa</p>
                <p className={cx('analytics')}>
                    <span className={cx('value')}>13M</span>
                    <span className={cx('label')}>Followers</span>
                    <span className={cx('value')}>291.6M</span>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>

        </div>
    );
}

export default AccountPreview;