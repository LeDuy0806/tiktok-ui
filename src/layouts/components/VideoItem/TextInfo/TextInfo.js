import { faCheckCircle, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './TextInfo.module.scss'
import AccountPreview from "~/components/SuggestedAccounts/AccountPreview";
import Tippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles)

function Content() {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex='-1' {...attrs}>
                <AccountPreview className={cx('popper')} />
            </div>
        )
    }
    return (
        <div className={cx('content')}>

            <div>
                <Tippy
                    interactive
                    delay={[800, 0]}
                    offset={[-170, 30]}
                    placement="bottom"
                    render={renderPreview}
                >
                    <div className={cx('info')}>
                        <h3 className={cx('username')}>
                            hoaa.hanassii
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h3>
                        <p className={cx('name')}>Đào Lê Phương Hoa</p>
                    </div>
                </Tippy>
            </div>


            <Button className={cx('follow-btn')} outline small>Follow</Button>
            <div className={cx('video-desc')}>
                <span>Tóc mới </span>
                <strong className={cx('hashtag')}>#Xuhuong</strong>
            </div>
            <p className={cx('video-music')}>
                <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                nhạc nền  - •°•Luca•°•
            </p>
        </div>
    );
}

export default Content;