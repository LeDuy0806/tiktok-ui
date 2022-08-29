import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { HashMarkIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, MusicIcon, UserGroupActiveIcon, UserGroupIcon } from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import Button from '~/components/Button';

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

      <div className={cx('frame-login')}>
        <p className={cx('title')}>Log in to follow creators, like videos, and view comments.</p>
        <Button className={cx('nav-login-btn')}>Log in</Button>
      </div>

      <SuggestedAccounts label={'Suggested accounts'} data={suggestedUsers} isSeeAll={isSeeAll} onSeeAll={handleSeeAll} />
      {/* <SuggestedAccounts label={'Following accounts'} /> */}

      <div className={cx('discover')}>
        <p className={cx('discover-title')}>Discover</p>
        <div className={cx('discover-list')}>
          <a href='/#' className={cx('discover-link')}>
            <HashMarkIcon />
            <p className={cx('text')}>cunghoangdao</p>
          </a>
          <a href='/#' className={cx('discover-link')}>
            <HashMarkIcon />
            <p className={cx('text')}>laptrinh</p>
          </a>
          <a href='/#' className={cx('discover-link')}>
            <HashMarkIcon />
            <p className={cx('text')}>thaydoibanthan</p>
          </a>
          <a href='/#' className={cx('discover-link')}>
            <MusicIcon />
            <p className={cx('text')}>Vài câu nói có khiến người thay đổi- GREY D, tlinh</p>
          </a>
          <a href='/#' className={cx('discover-link')}>
            <MusicIcon />
            <p className={cx('text')}>Em đây chẳng phải thúy kiều - Hoàng Thùy Linh</p>
          </a>
        </div>
      </div>
      <div className={cx('footer')}>
        <div className={cx('link-container')}>
          <a href='/#'>About</a>
          <a href='/#'>TikTok Browse</a>
          <a href='/#'>Newsroom</a>
          <a href='/#'>Contact</a>
          <a href='/#'>Carrers</a>
          <a href='/#'>ByteDance</a>
        </div>
        <div className={cx('link-container')}>
          <a href='/#'>TikTok for Good</a>
          <a href='/#'>Advertise</a>
          <a href='/#'>Developers</a>
          <a href='/#'>Transparency</a>
          <a href='/#'>TikTok Rewards</a>
        </div>
        <div className={cx('link-container')}>
          <a href='/#'>Help</a>
          <a href='/#'>Safety</a>
          <a href='/#'>Terms</a>
          <a href='/#'>Privacy</a>
          <a href='/#'>Creator Portal</a>
          <a href='/#'>Community Guidelines</a>
        </div>
        <span className={cx('copyright')}>{`© ${new Date().getFullYear()} TikTok`}</span>
      </div>
    </aside>
  )
}

export default Sidebar;
