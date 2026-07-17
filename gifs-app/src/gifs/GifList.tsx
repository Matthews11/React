import { type Gif } from '../mock-data/gifs.mock';

interface Props {
    gif: Gif[];
}

export const GifList = ({gif}:Props) => {
    return (
        <div className="gifs-container">
            {
                gif.map((gifs) => (
                    <div key={gifs.id} className="gif-card">
                        <img src={gifs.url} alt={gifs.title} />
                        <h3>{gifs.title}</h3>
                        <p>
                            {gifs.width} x {gifs.height} (1.5mb)
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

