import {topDealUsers} from '../../stats';

import './deals.scss';

const Deals = () => {
    return (
        <div className="Deals">
            <h2 className="Deals__title">Top Deals</h2>
            <div className="Deals__list">
                {topDealUsers.map(user=>(
                    <div className="Deals__list-element" key={user.id}>
                        <div className="Deals__user">
                            <img className="Deals__user-pic" src={user.img} />
                            <div className="Deals__user-info">
                                <p className="Deals__user-name">{user.username}</p>
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <p>${user.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Deals