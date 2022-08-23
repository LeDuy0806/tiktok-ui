import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Slidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles)

const INIT_PAGE = 1;
const PER_PAGE = 20;

function Sidebar() {
  const [suggestedUsers, setSuggestedUsers] = useState([])
  const [isSeeAll, setIsSeeAll] = useState(false)

  useEffect(() => {

    userService.getSuggested({ page: INIT_PAGE, perpage: PER_PAGE }).then(data => {
      setSuggestedUsers(data)
    }).catch(err => console.log(err));

  }, [])

  const handleSeeAll = () => {
    setIsSeeAll(!isSeeAll)
  }

  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem tilte="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem tilte="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
        <MenuItem tilte="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>

      <SuggestedAccounts label={'Suggested accounts'} data={suggestedUsers} isSeeAll={isSeeAll} onSeeAll={handleSeeAll} />
      {/* <SuggestedAccounts label={'Following accounts'} /> */}
      <div className={cx('footer')}>
        <div className={cx('link-container')}>
          <p>About</p>
          <p>TikTok Browse</p>
          <p>Newsroom</p>
          <p>Contact</p>
          <p>Carrers</p>
          <p>ByteDance</p>
        </div>
        <div className={cx('link-container')}>
          <p>TikTok for Good</p>
          <p>Advertise</p>
          <p>Developers</p>
          <p>Transparency</p>
          <p>TikTok Rewards</p>
        </div>
        <div className={cx('link-container')}>
          <p>Help</p>
          <p>Safety</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Creator Portal</p>
          <p>Community Guidelines</p>
        </div>
        <span className={cx('copyright')}>{`© ${new Date().getFullYear()} TikTok`}</span>
      </div>
    </aside>
  )
}

export default Sidebar;
