import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'

const cx = classNames.bind(styles)

function SuggestedAccounts({ label, data = [], isSeeAll, onSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {isSeeAll ? data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))
                : data.slice(0, 5).map((account) => (
                    <AccountItem key={account.id} data={account} />
                ))
            }
            <p className={cx('more-btn')} onClick={onSeeAll}>{isSeeAll ? 'See less' : 'See all'}</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
}
export default SuggestedAccounts;