import Main from '../../components/main/Main';
import Gallery from '../../components/gallery/Gallery';
import Data from '../../assets/videos-data.json';

const Videos = () => {
  return (
    <Main>
      <Gallery items={Data} />
    </Main>
  )
}

export default Videos;