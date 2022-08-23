import VideoItem from "../VideoItem";
import * as videoService from "~/services/videoService.js"
import { useEffect, useState } from "react";
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from './MainContent.module.scss'

const cx = classNames.bind(styles)

function MainContent() {
    const [page, setPage] = useState(1)
    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        videoService.getVideoList({ type: "for-you", page: page })
            .then(data => {
                setVideoList(prev => [...prev, ...data])
            }).catch(err => console.log(err));
    }, [page])
    return (
        <div>
            {videoList.map(data => (
                <VideoItem key={data.id} data={data} />
            ))}
            <Button primary onClick={() => (setPage(prev => prev + 1))} className={cx('btn-more')}>Load More</Button>
        </div>
    );
}

export default MainContent;