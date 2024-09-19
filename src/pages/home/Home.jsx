import Main from '../../components/main/Main';
import Gallery from '../../components/gallery/Gallery';
import Data from '../../assets/gallery-data.json';

const Home = () => {
  return (
    <Main>
      <Gallery items={Data} />
    </Main>
  )
}

export default Home;
