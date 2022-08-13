import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Tippy from '@tippyjs/react/headless';
import MenuItem from './Menuitem';

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            interactive
            delay={[0, 1000]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-lists')} tabIndex='-1'  {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}

        </Tippy>
    );
}

export default Menu;