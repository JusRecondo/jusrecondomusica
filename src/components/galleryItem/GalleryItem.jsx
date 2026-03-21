import PropTypes from 'prop-types';
import styles from './GalleryItem.module.scss';
import { useState } from 'react';

const CONTENT_TYPES = {
    embed: 'embed',
    image: 'image',
    video: 'video',
}

const GalleryItem = ({ item }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article
            className={styles.galleryItem}
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
        >
            {item.type === CONTENT_TYPES.embed ? (
                <iframe
                    className={styles.iframe}
                    src={item.content}
                    frameBorder="0"
                    allowFullScreen
                    title={item.info}
                ></iframe>
            ) : item.type === CONTENT_TYPES.image ? (
                <>
                    <p
                        className={`${styles.itemInfo} ${
                            showInfo && styles.showInfo
                        }`}
                    >
                        {item.info}
                    </p>
                    <img
                        className={styles.image}
                        src={item.content}
                        alt={item.info}
                    />
                </>
            ) : item.type === CONTENT_TYPES.video ? (
                <iframe className={styles.video} src={item.content} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            ) : null}
        </article>
    )
}

export default GalleryItem;

GalleryItem.propTypes = {
    item: PropTypes.object,
}
