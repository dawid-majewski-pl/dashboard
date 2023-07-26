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
                <div className="Navbar__icon-box"><img className="Navbar__icon Navbar__icon--zoom" src={search} alt="x"  /></div>
                <div className="Navbar__icon-box"><img className="Navbar__icon Navbar__icon--app" src={app} alt="x" /></div>
                <div className="Navbar__icon-box"><img className="Navbar__icon Navbar__icon--expand" src={expand} alt="x" /></div>
                <div className="Navbar__icon-box"><img className="Navbar__icon Navbar__icon--bell" src={notifications} alt="x" /></div>
                <div className="Navbar__icon-box"><img className="Navbar__icon Navbar__icon--gear" src={settings} alt="x" /></div>
                <div className="Navbar__user">
                    <img className="Navbar__profile" src={profile} />
                    <span className="Navbar__user-name">Dawid Majewski</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar