import PropTypes from 'prop-types';
import GalleryItem from '../galleryItem/GalleryItem';
import styles from './Gallery.module.scss';

const Gallery = ({ items }) => {

    return (
        <section className={styles.gallery}>
            {items.map(item => (
                <GalleryItem key={item.id} item={item} />
            ))}
        </section>
    )
}

export default Gallery;

Gallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};
