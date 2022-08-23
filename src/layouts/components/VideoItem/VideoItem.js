import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './VideoItem.module.scss'
import Image from '~/components/Image';
import TextInfo from "./TextInfo";
import VideoWrapper from "./VideoWrapper";
import AccountPreview from "~/components/SuggestedAccounts/AccountPreview";
import Tippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles)

function VideoItem({ data }) {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex='-1' {...attrs}>
                <AccountPreview className={cx('popper')} data={data.user} />
            </div>
        )
    }
    return (
        <div className={cx('container')}>
            <div>
                <Tippy
                    interactive
                    delay={[800, 0]}
                    offset={[125, 2]}
                    placement="bottom"
                    render={renderPreview}
                >
                    <Image
                        className={cx('avatar')}
                        src={data.user.avatar}
                        alt=""
                    ></Image>
                </Tippy>
            </div>

            <div className={cx('content')}>
                <TextInfo data={data} />
                <VideoWrapper data={data} />
            </div>

        </div>
    );
}
VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default VideoItem;