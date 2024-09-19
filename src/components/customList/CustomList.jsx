import { useEffect, useState } from 'react';
import styles from './CustomList.module.scss';
import PropTypes from 'prop-types';

const CustomList = ({ listItems, limit = null, id = '' }) => {
    const [itemsToMap, setItemsToMap] = useState(listItems);

    useEffect(() => {
        if (limit) {
            setItemsToMap(itemsToMap.slice(0, limit))
        }
    }, []);

    return (
        <ul className={styles.list} id={id ? id : null}>
            {itemsToMap.map((item, index) => (
                <li key={`item-${index}`} className={styles.contactListItem}>
                    {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer">
                            &lt; {item.text} /&gt;
                        </a>
                    ) : (
                        <p>&lt; {item.text} /&gt;</p>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default CustomList;

CustomList.propTypes = {
    listItems: PropTypes.array,
    limit: PropTypes.number,
    id: PropTypes.string
}