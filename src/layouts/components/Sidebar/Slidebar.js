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

function Slidebar() {
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
    </aside>
  )
}

export default Slidebar;
