import VideoItem from "../VideoItem";
import * as videoService from "~/services/videoService.js"
import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from './MainContent.module.scss'
import { GoToTopIcon } from "~/components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMobile, faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function MainContent() {
    const [page, setPage] = useState(1)
    const [videoList, setVideoList] = useState([])
    const [goToTop, setGoToTop] = useState(false)
    const [expandOpen, setExpandOpen] = useState(false)

    const loadMoreRef = useRef(null)

    useEffect(() => {
        videoService.getVideoList({ type: "for-you", page: page })
            .then(data => {
                setVideoList(prev => [...prev, ...data])
            }).catch(err => console.log(err));
    }, [page])
    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY >= 50)
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                setPage(prev => prev + 1)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        window.scrollY === 0 && setGoToTop(false);
    }
    return (
        <div>
            {videoList.map(data => (
                <VideoItem key={data.id} data={data} />
            ))}
            <div className={cx('load-more')} ref={loadMoreRef}>
                <span className={cx('load-more-animation')}></span>
            </div>
            <div className={cx('bottom', { 'hide-goToTop': !goToTop })}>
                <div className={cx('getApp')}>
                    <button className={cx('getApp-btn', { 'hide-getApp': expandOpen })} onClick={() => setExpandOpen(true)}>Get app</button>
                    <div className={cx('expand', { 'hide-expand': !expandOpen })}>
                        <div className={cx('xmark')} onClick={() => setExpandOpen(false)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                        <div className={cx('expand-wrapper')}>
                            <div className={cx('expand-item')}>
                                <FontAwesomeIcon icon={faDesktop} />
                                <span>Get TikTok for desktop</span>
                            </div>
                            <div className={cx('expand-item')}>
                                <FontAwesomeIcon icon={faMobile} />
                                <span>Get TikTok App</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={cx('gototop-btn')} onClick={handleGoToTop}><GoToTopIcon /></button>
            </div>
        </div>
    );
}

export default MainContent;