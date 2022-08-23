import { faCheckCircle, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './TextInfo.module.scss'
import AccountPreview from "~/components/SuggestedAccounts/AccountPreview";
import Tippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles)

<<<<<<< HEAD
function Content({ data }) {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex='-1' {...attrs}>
                <AccountPreview className={cx('popper')} data={data.user} />
=======
function Content() {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex='-1' {...attrs}>
                <AccountPreview className={cx('popper')} />
>>>>>>> c4fe8105e74255f90896aab5b505d7ba51da6c7b
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
<<<<<<< HEAD
                            {data.user.nickname}
                            {data.user.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                        </h3>
                        <p className={cx('name')}>{data.user.first_name + ' ' + data.user.last_name}</p>
=======
                            hoaa.hanassii
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h3>
                        <p className={cx('name')}>Đào Lê Phương Hoa</p>
>>>>>>> c4fe8105e74255f90896aab5b505d7ba51da6c7b
                    </div>
                </Tippy>
            </div>


            <Button className={cx('follow-btn')} outline small>Follow</Button>
            <div className={cx('video-desc')}>
<<<<<<< HEAD
                <span>{data.description}</span>
=======
                <span>Tóc mới </span>
>>>>>>> c4fe8105e74255f90896aab5b505d7ba51da6c7b
                <strong className={cx('hashtag')}>#Xuhuong</strong>
            </div>
            <p className={cx('video-music')}>
                <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
<<<<<<< HEAD
                {data.music ? `${data.music}` : `nhạc nền  - ${data.user.nickname}`}
=======
                nhạc nền  - •°•Luca•°•
>>>>>>> c4fe8105e74255f90896aab5b505d7ba51da6c7b
            </p>
        </div>
    );
}

export default Content;