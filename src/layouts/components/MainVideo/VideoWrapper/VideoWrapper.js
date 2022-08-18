import { faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './VideoWrapper.module.scss'

const cx = classNames.bind(styles)

function VideoWrapper() {
    return (
        <div className={cx('container')}>
            <div className={cx('video-card')}>
                <div className={cx('video-player')}>
                    <video
                        className={cx('video')}
                        src="https://v16-webapp.tiktok.com/a6783f973f94b4a1a39b250ca38d3563/62fce2cb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/b4e811b789a243f5832a7fe56a4d0fd2/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2640&bt=1320&cs=0&ds=3&ft=eXd.6Hk_Myq8ZBPAOwe2Nopaml7Gb&mime_type=video_mp4&qs=0&rc=ZTs0ZjY5OjM1Z2RnNWZkOkBpajR4ajw6ZmtxZTMzZjgzM0AwMGJeMjAvXy0xMC5hNjUuYSMtXm5icjRfY29gLS1kL2Nzcw%3D%3D&l=2022081706444701024509900200161623&btag=80000"
                        autoPlay
                    />
                </div>
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