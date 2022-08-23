import PropTypes from 'prop-types';
import { faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './VideoWrapper.module.scss'
import Video from "~/components/Video";

const cx = classNames.bind(styles)

function numberFormatter(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}
function VideoWrapper({ data }) {
    return (
        <div className={cx('container')}>
            <div className={cx('video-card')}>
<<<<<<< HEAD
                <Video data={data} />
=======
                <Video />
>>>>>>> c4fe8105e74255f90896aab5b505d7ba51da6c7b
            </div>
            <div className={cx('action')}>
                <button className={cx('action-btn')}>
                    <span >
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <strong className={cx('count')}>{numberFormatter(data.likes_count + 100000)}</strong>
                </button>
                <button className={cx('action-btn')}>
                    <span>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </span>
                    <strong className={cx('count')}>{numberFormatter(data.comments_count + 100)}</strong>
                </button>
                <button className={cx('action-btn')}>
                    <span>
                        <FontAwesomeIcon icon={faShare} />
                    </span>
                    <strong className={cx('count')}>{numberFormatter(data.shares_count + 100)}</strong>
                </button>
            </div>
        </div>
    );
}

VideoWrapper.propTypes = {
    data: PropTypes.object.isRequired,
}

export default VideoWrapper;