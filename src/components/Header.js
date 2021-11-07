// gmail 
// images
// apps
// account
import menu from '../menu.png'

function Header() {
    return (
        <div className='header'>
            <Gmail/>
            <Images/>
            <Apps/>
            <Account/>
        </div>
    )
}

function Gmail() {
    return (
        <div className='gmail'>
            Gmail
        </div>
    )
}

function Images() {
    return (
        <div className='images'>
            Images
        </div>
    )
}

function Apps() {
    return (
        <div className='apps'>
            <img src={menu} className='menu' alt='Sidehustle-apps' />
        </div>
    )
}

function Account() {
    return (
        <div className='account'>
            M
        </div>
    )
}

export default Header