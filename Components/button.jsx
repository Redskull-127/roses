import styles from '../styles/Home.module.css'

export default function Button() {
    return (
        <>
            <a className={styles.card}>
                <h2>Shuffle Meer&apos;s Playlist &rarr;</h2>
                <p>Note please install spotify first.</p>
            </a>
        </>
    );
}