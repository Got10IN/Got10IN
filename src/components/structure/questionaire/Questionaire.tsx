import { Outlet } from 'react-router-dom'

const Questionaire = () => {
    return (
        <div
            className='Q-fullscreen-container'
            style={{ paddingTop: '15%', paddingBottom: '10%' }}
        >
            <Outlet />
        </div>
    )
}

export default Questionaire
