import { faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './VideoWrapper.module.scss'
import Video from "~/components/Video";

const cx = classNames.bind(styles)

function VideoWrapper() {
    return (
        <div className={cx('container')}>
            <div className={cx('video-card')}>
                <Video />
            </div>
            <div className={cx('action')}>
                <button className={cx('action-btn')}>
                    <span >
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <strong className={cx('count')}>217.2K</strong>
                </button>
                <button className={cx('action-btn')}>
                    <span>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </span>
                    <strong className={cx('count')}>1757</strong>
                </button>
                <button className={cx('action-btn')}>
                    <span>
                        <FontAwesomeIcon icon={faShare} />
                    </span>
                    <strong className={cx('count')}>295</strong>
                </button>
            </div>
        </div>
    );
}

export default VideoWrapper;