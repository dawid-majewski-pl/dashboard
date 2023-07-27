import { Link } from "react-router-dom";

import { menu } from "../../data";
import "./menu.scss";


const Menu = () => {
    return (
        <div className="Menu">
            {menu.map((item) => (
            <div className="Menu__item" key={item.id}>
                <span className="Menu__title" key={item.title}></span>
                {item.listItems.map((listItem) => (
                <Link className="Menu__link" to={listItem.url}>
                    <img src={listItem.icon} alt={listItem.alt} />
                    <span className="Menu__link-title">{listItem.title}</span>
                </Link>
                ))}
            </div>
        ))}
        </div>
    )
};

export default Menu;
