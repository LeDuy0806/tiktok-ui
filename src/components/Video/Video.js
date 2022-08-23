import PropTypes from 'prop-types';
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './Video.module.scss'
import './Video.scss'
import { memo, useEffect, useRef, useState } from "react";
import ReactSlider from "react-slider";
import ReactPlayer from 'react-player';
import { VolumeIcon, VolumeMuteIcon } from "../Icons";
import useElementOnScreen from '~/hooks/useElementOnScreen';


const cx = classNames.bind(styles)

const formatTime = (time) => {
    if (isNaN(time)) {
        return `00:00`;
    }
    const date = new Date(time * 1000);
    const hour = date.getUTCHours();
    const minute = '0' + date.getUTCMinutes();
    const second = date.getUTCSeconds().toString().padStart(2, "0");
    if (hour) {
        return `${hour}:${minute.toString().padStart(2, "0")}:${second}`;
    }
    return `${minute}:${second}`;
}

let lastvolume = 80;
function Video({ data }) {
    const [isPlay, setPlay] = useState(false)
    const [playTime, setPlayTime] = useState({});
    const [isMuted, setMuted] = useState(false)
    const [volumeValue, setVolume] = useState(80)
    const videoRef = useRef(null)
    const wrapperRef = useRef(null)
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }
    const isVisibile = useElementOnScreen(options, wrapperRef)

    const { playedSeconds: currentTime, loadedSeconds: duration } = playTime

    useEffect(() => {
        if (isVisibile) {
            if (!isPlay) {
                videoRef.current.seekTo(0, "fraction")
                setPlay(true)
            }
        }
        else {
            if (isPlay) {
                setPlay(false)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisibile])

    const hanldeVolumeChange = (value) => {
        const newvalue = 100 - value
        if (newvalue) {
            setVolume(newvalue)
            setMuted(false)
        }
        else {
            setVolume(newvalue)
            setMuted(true)
        }
    }

    const toogleVolume = () => {
        if (isMuted) {
            setMuted(false)
            setVolume(lastvolume)
        } else {
            setMuted(true)
            lastvolume = volumeValue
            setVolume(0)
        }
    }

    const handleProgress = (changeState) => {
        // console.log(videoRef.current.getCurrentTime())
        setPlayTime(changeState);
    }
    const handleProgressChange = (value) => {
        videoRef.current.seekTo(value / 100, "fraction")
        setPlayTime({ ...playTime, playedSeconds: value / 100 * duration });
    }
    return (
        <div ref={wrapperRef} className={cx('video-player')}>
            <ReactPlayer
                ref={videoRef}
                className={cx('video')}
                url={data.file_url}
                playing={isPlay}
                volume={volumeValue / 100}
                width='100%'
                height='100%'
                loop={true}
                onProgress={handleProgress}
            />
            <div className={cx('play-btn')} onClick={() => setPlay(!isPlay)}>
                {isPlay ? (<FontAwesomeIcon icon={faPause} />) : (<FontAwesomeIcon icon={faPlay} />)}
            </div>

            <div className={cx('volume-control')}>
                <div className={cx('volume-control-slider')}>
                    <ReactSlider
                        className={cx('volume-slider')}
                        thumbClassName={cx('volume-thumb')}
                        trackClassName="volume-track"
                        min={0}
                        max={100}
                        value={isMuted ? 100 : 100 - volumeValue}
                        orientation="vertical"
                        onChange={hanldeVolumeChange}
                    />
                </div>
                <div className={cx('volume-icon')} onClick={toogleVolume}>
                    {isMuted ? <VolumeMuteIcon className={cx('volume-mute-icon')} /> :
                        <VolumeIcon className={cx('volume-active-icon')} />}
                </div>
            </div>

            <p className={cx('report-btn')}>
                <FontAwesomeIcon icon={faFlag} />
                Report
            </p>
            <div className={cx('progress-control')}>
                <div className={cx('progress-bar')}>
                    <ReactSlider
                        className={cx('progress-slider')}
                        thumbClassName={cx('thumb')}
                        trackClassName='video-progress-track'
                        min={0}
                        max={100}
                        value={currentTime ? currentTime * 100 / duration : 0}
                        onChange={handleProgressChange}
                    />
                </div>
                <div className={cx('time')}>{formatTime(currentTime)}/{formatTime(duration)}</div>
            </div>
        </div>
    );
}

Video.propTypes = {
    data: PropTypes.object.isRequired,
}

export default memo(Video);