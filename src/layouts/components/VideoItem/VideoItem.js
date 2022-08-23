<<<<<<< HEAD
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './VideoItem.module.scss'
import Image from '~/components/Image';
=======
import classNames from "classnames/bind";
import styles from './VideoItem.module.scss'

>>>>>>> c4fe8105e74255f90896aab5b505d7ba51da6c7b
import TextInfo from "./TextInfo";
import VideoWrapper from "./VideoWrapper";
import AccountPreview from "~/components/SuggestedAccounts/AccountPreview";
import Tippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles)

<<<<<<< HEAD
function VideoItem({ data }) {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex='-1' {...attrs}>
                <AccountPreview className={cx('popper')} data={data.user} />
=======
function VideoItem() {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex='-1' {...attrs}>
                <AccountPreview className={cx('popper')} />
>>>>>>> c4fe8105e74255f90896aab5b505d7ba51da6c7b
            </div>
        )
    }
    return (
        <div className={cx('container')}>
<<<<<<< HEAD
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
=======
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[125, 2]}
                placement="bottom"
                render={renderPreview}
            >
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1661241600&x-signature=9O0Mv1GA7hTA%2FOYvR1dSrCwFL5o%3D"
                    alt=""
                ></img>
            </Tippy>

            <div className={cx('content')}>
                <TextInfo />
                <VideoWrapper />
>>>>>>> c4fe8105e74255f90896aab5b505d7ba51da6c7b
            </div>

        </div>
    );
}
<<<<<<< HEAD
VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
}
=======
>>>>>>> c4fe8105e74255f90896aab5b505d7ba51da6c7b

export default VideoItem;