import styles from './Footer.module.scss';
import links from '../../assets/links-data.json';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <ul className={styles.contactList}>
                {links.rrss.map((item, index) => (
                    <li
                        key={`contact${index}`}
                        className={styles.contactListItem}
                    >
                        {item.url ?
                            <a href={item.url} target='_blank' rel="noreferrer">
                                &lt; {item.text} /&gt;
                            </a>
                            :
                            <p>&lt; {item.text} /&gt;</p>
                        }
                    </li>

                ))
                }
            </ul>
        </footer>
    )
}

export default Footer;