import CustomList from "../components/customList/CustomList";
import Main from "../components/main/Main";
import links from '../assets/links-data.json';
import styles from './Links.module.scss';

const Links = () => {
    return (
        <Main customClassName={styles.links}>
            <section className="links-section">
                <CustomList listItems={links.rrss} />
                <CustomList listItems={links.instruments} />
                <CustomList listItems={links.recordings} />
            </section>
        </Main>
    )
}

export default Links;

