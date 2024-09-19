import Main from '../../components/main/Main';
import styles from './Bio.module.scss';

const Bio = () => {
    return (
        <Main customClassName={styles.bio}>
            <h2>Bio</h2>
            <p>Jus Recondo es músique y programadore originarie de Merlo, Bs. As. (1994).
                Egresó del profesorado de música del Conservatorio “Alberto Ginastera” (orientación instrumento: guitarra) en 2019 y luego cursó en la Diplomatura de música contemporánea del Conservatorio Superior de Música “Manuel de Falla”, profundizando en la interpretación de obras para guitarra de los siglos XX y XXI.
            </p>
            <p>Desde 2009 ha participado en diversos proyectos musicales como guitarrista, bajista y/o en los sintetizadores, tocando estilos desde el blues, hasta la cumbia, pasando por el rock alternativo y el punk. También ha dado conciertos de guitarra solista y con ensambles de música de cámara.
            </p>
            <p>En los últimos años se ha dedicado a la exploración e improvisación con guitarra eléctrica, samples y sintetizadores, así también al desarrollo de estos últimos a través de la programación. </p>
            <p>En 2021 conformó un dúo de improvisación llamado IPJR junto a le artista Ire Paz, realizando presentaciones que incluyeron la participación de la artista visual Iris Saladino a cargo de la programación en tiempo real de visuales (Live Coding con la tecnología Hydra Synth).
            </p>
            <p>
                Durante 2021 y 2022 tocó guitarras y sintetizadores en la banda de electropop “Perfume” y desde comienzos de 2024 es guitarrista en la banda “La Cara de los Últimos”.
            </p>
            <p>A partir de 2022 se presenta de manera solista realizando un set donde plantea la improvisación sonora como el desarrollo de espacios y escenas, recorriendo un camino con una narrativa construida a través de cambios en densidad, timbres y grados de organización. Utiliza como recursos principales la guitarra eléctrica, los sintetizadores experimentales que desarrolló y que suenan desde su celular, junto con samples de sonidos procesados, sumando ocasionalmente otros elementos como radios am/fm o colaborando con otres músiques para improvisar.
            </p>
            <p>
                En 2022 editó de forma independiente su primer EP de improvisación “259022” y el diez de octubre de 2024 estará disponible en todas las plataformas su segundo EP “091223”.
            </p>
        </Main>
    )
}

export default Bio;