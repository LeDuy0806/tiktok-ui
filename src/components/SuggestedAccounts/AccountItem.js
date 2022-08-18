import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (attrs) => {
        return (
            <div tabIndex='-1' {...attrs}>
                <PopperWrapper className={cx('popper')}>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-22, 2]}
                placement="bottom"
                render={renderPreview}

            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1660831200&x-signature=qhnfCv2ORkBJqtnE6ePd9vBDIZM%3D"
                        alt=""
                    />
                    <div className={cx('info')}>
                        <div className={cx('username')}>
                            <h4>hoaa.hanassii</h4>
                            <div className={cx('check')}><FontAwesomeIcon icon={faCheckCircle} /></div>
                        </div>
                        <p className={cx('name')}>Đào Lê Phương Hoa</p>
                    </div>
                </div>
            </Tippy>
        </div >
    );
}

AccountItem.propTypes = {

}

export default AccountItem;