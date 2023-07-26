import "./menu.scss";
import home from "/src/svg/home.svg";
import profile from "/src/svg/profile.svg";
import products from "/src/svg/product.svg";
import orders from "/src/svg/order.svg";
import posts from "/src/svg/post2.svg";
import elements from "/src/svg/element.svg";
import notes from "/src/svg/note.svg";
import forms from "/src/svg/form.svg";
import calendar from "/src/svg/calendar.svg";
import settings from "/src/svg/settings.svg";
import backups from "/src/svg/backup.svg";
import charts from "/src/svg/chart.svg";
import logs from "/src/svg/log.svg";

const Menu = () => {
    return (
        <div className="Menu">
            <div className="Menu__item">
                <span className="Menu__title">MAIN</span>
                <a className="Menu__link" href="x">
                    <img src={home} alt="Home icon." />
                    <span className="Menu__link-title">Home</span>
                </a>
                <a className="Menu__link" href="x">
                    <img src={profile} alt="Profile icon." />
                    <span className="Menu__link-title">Profile</span>
                </a>
            </div>
            <div className="Menu__item">
                <span className="Menu__title">LISTS</span>
                <a className="Menu__link" href="x">
                    <img src={home} alt="Home icon." />
                    <span className="Menu__link-title">Users</span>
                </a>
                <a className="Menu__link" href="x">
                    <img src={products} alt="Profile icon." />
                    <span className="Menu__link-title">Products</span>
                </a>
                <a className="Menu__link" href="x">
                    <img src={orders} alt="Home icon." />
                    <span className="Menu__link-title">Orders</span>
                </a>
                <a className="Menu__link" href="x">
                    <img src={posts} alt="Profile icon." />
                    <span className="Menu__link-title">Posts</span>
                </a>
            </div>
            <div className="Menu__item">
                <span className="Menu__title">GENERAL</span>
                <a className="Menu__link" href="x">
                    <img src={elements} alt="Home icon." />
                    <span className="Menu__link-title">Elements</span>
                </a>
                <a className="Menu__link" href="x">
                    <img src={notes} alt="Profile icon." />
                    <span className="Menu__link-title">Notes</span>
                </a>
                <a className="Menu__link" href="x">
                    <img src={forms} alt="Home icon." />
                    <span className="Menu__link-title">Forms</span>
                </a>
                <a className="Menu__link" href="x">
                    <img src={calendar} alt="Profile icon." />
                    <span className="Menu__link-title">Calendar</span>
                </a>
            </div>
            <div className="Menu__item">
                <span className="Menu__title">MAINTENANCE</span>
                <a className="Menu__link" href="x">
                    <img src={settings} alt="Home icon." />
                    <span className="Menu__link-title">Settings</span>
                </a>
                <a className="Menu__link" href="x">
                    <img src={backups} alt="Profile icon." />
                    <span className="Menu__link-title">Backups</span>
                </a>
            </div>
            <div className="Menu__item">
                <span className="Menu__title">ANALYTICS</span>
                <a className="Menu__link" href="x">
                    <img src={charts} alt="Home icon." />
                    <span className="Menu__link-title">Charts</span>
                </a>
                <a className="Menu__link" href="x">
                    <img src={logs} alt="Profile icon." />
                    <span className="Menu__link-title">Logs</span>
                </a>
            </div>
        </div>
    );
};

export default Menu;
