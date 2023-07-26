import './navbar.scss'
import logo from '/src/svg/logo.svg'
import search from '/src/svg/search.svg'
import app from '/src/svg/app.svg'
import expand from '/src/svg/expand.svg'
import notifications from '/src/svg/notifications.svg'
import settings from '/src/svg/settings.svg'
import profile from '/src/img/majewski_profile.webp'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="Navbar__heading">
                <img className="Navbar__logo" src={logo} alt="Company logo." />
                <span className="Navbar__header">FastDev</span>
            </div>
            <div className="Navbar__icons">
                <img className="Navbar__icon" src={search} alt="x"  />
                <img className="Navbar__icon" src={app} alt="x" />
                <img className="Navbar__icon" src={expand} alt="x" />
                <img className="Navbar__icon" src={notifications} alt="x" />
                <img className="Navbar__icon" src={settings} alt="x" />
                <div className="Navbar__user">
                    <img className="Navbar__profile" src={profile} />
                    <span className="Navbar__user-name">Dawid Majewski</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar