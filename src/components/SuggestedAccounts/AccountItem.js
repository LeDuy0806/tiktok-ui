import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles)

function AccountItem({ data }) {

    const renderPreview = (attrs) => {
        return (
            <div tabIndex='-1' {...attrs}>
                <PopperWrapper className={cx('popper')}>
                    <AccountPreview data={data} />
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
                    <Image
                        className={cx('avatar')}
                        src={data.avatar}
                        alt=""
                    />
                    <div className={cx('info')}>
                        <div className={cx('username')}>
                            <h4>{data.nickname}</h4>
                            {data.tick && (<div className={cx('check')}><FontAwesomeIcon icon={faCheckCircle} /></div>)}
                        </div>
                        <p className={cx('name')}>{data.first_name + ' ' + data.last_name}</p>
                    </div>
                </div>
            </Tippy>
        </div >
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;