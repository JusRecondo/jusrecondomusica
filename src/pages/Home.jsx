import Main from '../components/main/Main';
import Data from '../assets/gallery-data.json';
import Gallery from '../components/gallery/Gallery';

const Home = () => {
  return (
    <Main>
      <Gallery items={Data} />
    </Main>
  )
}

export default Home;
