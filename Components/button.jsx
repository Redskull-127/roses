import styles from '../styles/Button.module.css'

export default function Button() {
    return (
        <>
            <a className={styles.card}>
                {/* <h2>Shuffle Meer&apos;s Playlist &rarr;</h2>
                <p>Note please install spotify first.</p> */}
                <p><i class="fa-solid fa-shuffle"></i> Shuffle</p>
            </a>
        </>
    );
}