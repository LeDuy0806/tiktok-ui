import PropTypes from 'prop-types';
import { faCommentDots, faEnvelope, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './VideoWrapper.module.scss'
import Video from "~/components/Video";
import { CodeIcon, FacebookIcon, LinkIcon, PaperPlaneIcon, WhatsAppIcon } from '~/components/Icons';
import ShareMenu from '~/components/Popper/ShareMenu';
import { faLine, faLinkedin, faPinterest, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

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

    const SHARE_MENU = [
        {
            icon: <CodeIcon />,
            title: 'Embed',
            href: '/#'
        },
        {
            icon: <PaperPlaneIcon />,
            title: 'Send to friends',
            href: '/#'
        },
        {
            icon: <FacebookIcon />,
            title: 'Share to Facebook',
            href: '/#'
        },
        {
            icon: <WhatsAppIcon />,
            title: 'Share to WhatsApp',
            href: '/#'
        },
        {
            icon: <LinkIcon />,
            title: 'Copy link',
            href: '/#'
        },
        {
            icon: <FontAwesomeIcon icon={faTwitter} />,
            title: 'Share to Twitter',
            href: '/#'
        },
        {
            icon: <FontAwesomeIcon icon={faLinkedin} />,
            title: 'Share to LinkedIn',
            href: '/#'
        },
        {
            icon: <FontAwesomeIcon icon={faTelegram} />,
            title: 'Share to Telegram',
            href: '/#'
        },
        {
            icon: <FontAwesomeIcon icon={faEnvelope} />,
            title: 'Share to Email',
            href: '/#'
        },
        {
            icon: <FontAwesomeIcon icon={faLine} />,
            title: 'Share to Line',
            href: '/#'
        },
        {
            icon: <FontAwesomeIcon icon={faPinterest} />,
            title: 'Share to Pinterest',
            href: '/#'
        },
    ]
    return (
        <div className={cx('container')}>
            <div className={cx('video-card')}>
                <Video data={data} />
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

                <ShareMenu items={SHARE_MENU}>
                    <button className={cx('action-btn')}>
                        <span>
                            <FontAwesomeIcon icon={faShare} />
                        </span>
                        <strong className={cx('count')}>{numberFormatter(data.shares_count + 100)}</strong>
                    </button>
                </ShareMenu>

            </div>
        </div>
    );
}

VideoWrapper.propTypes = {
    data: PropTypes.object.isRequired,
}

export default VideoWrapper;