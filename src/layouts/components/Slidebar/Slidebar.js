import classNames from 'classnames/bind';

import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Slidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles)

function Slidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem tilte="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem tilte="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
        <MenuItem tilte="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>

      <SuggestedAccounts label={'Suggested accounts'} />
      {/* <SuggestedAccounts label={'Following accounts'} /> */}
    </aside>
  )
}

export default Slidebar;
