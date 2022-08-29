import classNames from 'classnames/bind';
import styles from './ShareMenu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles)

function ShareMenu({ children, items = [] }) {
    const [loadAll, setLoadAll] = useState(false)

    const renderItems = () => {
        return (
            <>
                {loadAll ? items.map((item, index) => (
                    <MenuItem key={index} data={item} />
                )) :
                    items.slice(0, 5).map((item, index) => (
                        <MenuItem key={index} data={item} />
                    ))
                }
                {!loadAll && <div className={cx('more-link')} onClick={() => setLoadAll(true)}>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>}
            </>
        )
    }

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            offset={[-28, 0]}
            placement='top-start'
            render={attrs => (
                <div className={cx('menu-lists')} tabIndex='-1'  {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                    <span className={cx('down-icon')}><FontAwesomeIcon icon={faCaretDown} /></span>
                </div>
            )}
            onHide={() => setLoadAll(false)}
        >
            {children}

        </Tippy>
    );
}

export default ShareMenu;