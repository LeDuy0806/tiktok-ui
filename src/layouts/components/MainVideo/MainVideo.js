import classNames from "classnames/bind";
import styles from './MainVideo.module.scss'

import TextInfo from "./TextInfo";
import VideoWrapper from "./VideoWrapper";

const cx = classNames.bind(styles)

function WatchVideo() {
    return (
        <div className={cx('container')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1660892400&x-signature=r1%2BBFU65fMb7XO%2B9ieQF%2FhOwVEY%3D"
                alt=""
            ></img>
            <div className={cx('content')}>
                <TextInfo />
                <VideoWrapper />
            </div>

        </div>
    );
}

export default WatchVideo;