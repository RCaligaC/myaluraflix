import styles from './VideoCard.module.css';

function VideoCard({videoCard}) {
    return (
        <div className={styles.videoCard} style={{backgroundImage: `url("${videoCard}")`}}></div>
    )
}

export default VideoCard;