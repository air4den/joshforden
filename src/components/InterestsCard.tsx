import './About.css'

const interests = [
    {   name: '🏃🏼‍♂️ Running',            url: 'https://track.rtrt.me/e/ATC-PUBLIX-ATL-MARATHON-2025#/dash/RURY4PE3'},
    {   name: '⚽️ Soccer',    url: 'https://www.youtube.com/watch?v=4rG1sP1rhow' },
    {   name: '🏔️ Hiking',    url: '' },
    {   name: '🌄 Photography',    url: '' },
    {   name: '🤟🏻 Spanish',    url: '' },
    {   name: '⚾️ STL Cardinals',    url: 'https://www.youtube.com/watch?v=PZVCrKcOl78' },
    {   name: '🏈 GT Football',    url: 'https://www.youtube.com/watch?v=Sm6eZ9V9RbM' },
    {   name: '🎣 Fly Fishing',    url: '' },
    {   name: '✈️ Travel',    url: '' },
    {   name: '📚 Reading',    url: 'https://www.goodreads.com/user/show/139525226-josh' },
]

export default function InterestesCard() {
    return (
        <div className="interests-card">
            <h3 className='interests-card-text-h3'>Interests</h3>
            <div className='interests-card-grid'>
                {interests.map(({name, url}) => ( url
                    ? <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interests-box"
                    >
                        {name}
                    </a>
                    : <div
                        key={name}
                        className="interests-box"
                    >
                        {name}
                    </div>
                ))}
            </div>
        </div>
    )
}