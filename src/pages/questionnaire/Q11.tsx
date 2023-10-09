import { Link } from 'react-router-dom'
import './Questionaire.css'

function Q11() {
    const currentPage = 11
    const totalPages = 11

    const progressPercentage = (currentPage / totalPages) * 100

    const progressBarStyle = {
        width: `${progressPercentage}%`,
    }

    return (
        <div
            className='Q-fullscreen-container'
            style={{ paddingTop: '15%', paddingBottom: '10%' }}
        >
            <div className='Q-center-container'>
                <div className='progress-container'>
                    <div className='progress-title'>Progress</div>
                    <div className='barbackground'>
                        <div
                            className='progress-fill'
                            style={progressBarStyle}
                        ></div>
                    </div>
                    <div className='progress-text'>{`${currentPage}/${totalPages}`}</div>
                </div>
            </div>
            <div className='Q-center-container'>
                <Link
                    to='/my-college-ranking'
                    className='small-button'
                    style={{
                        backgroundColor: '#96B2CF',
                        height: '10%',
                        padding: '1% 3%',
                        flex: '0.02',
                        marginRight: '15%',
                    }}
                >
                    Exit
                </Link>
                <div className='Q-Button-container' style={{ flex: '0.98' }}>
                    <Link
                        to='/question10'
                        className='small-button'
                        style={{
                            backgroundColor: '#96B2CF',
                            height: '100%',
                            padding: '1% 4%',
                        }}
                    >
                        &lt;
                    </Link>
                    <div className='skip-button-container'>
                        <Link to='/question12' className='small-text-blue'>
                            Skip
                        </Link>
                    </div>
                    <Link
                        to='/question12'
                        className='small-button'
                        style={{
                            backgroundColor: '#003362',
                            height: '100%',
                            padding: '1% 4%',
                        }}
                    >
                        &gt;
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Q11