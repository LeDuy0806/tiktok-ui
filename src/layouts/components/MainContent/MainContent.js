import VideoItem from "../VideoItem";
<<<<<<< HEAD
import * as videoService from "~/services/videoService.js"
import { useEffect, useState } from "react";
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from './MainContent.module.scss'

const cx = classNames.bind(styles)
=======
>>>>>>> c4fe8105e74255f90896aab5b505d7ba51da6c7b

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
<<<<<<< HEAD
            {videoList.map(data => (
                <VideoItem key={data.id} data={data} />
            ))}
            <Button primary onClick={() => (setPage(prev => prev + 1))} className={cx('btn-more')}>Load More</Button>
=======
            <VideoItem />
            <VideoItem />
>>>>>>> c4fe8105e74255f90896aab5b505d7ba51da6c7b
        </div>
    );
}

export default MainContent;