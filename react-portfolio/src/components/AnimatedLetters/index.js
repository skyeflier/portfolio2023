import './index.scss'

const AnimatedLetters = ({ letterClass, StrArray, idx }) => {
    return (
        <span>
            {
                StrArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters