import "./home.scss";
import Deals from '../../components/deals/Deals'
import Chart from '../../components/chart/Chart'
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../stats'

const Home = () => {
    return (
        <div className="Home">
        <div className="Home__box Home__box--1"><Deals /></div>
        <div className="Home__box Home__box--2"><Chart {...chartBoxUser}/></div>
        <div className="Home__box Home__box--3"><Chart {...chartBoxProduct}/></div>
        <div className="Home__box Home__box--4"></div>
        <div className="Home__box Home__box--5"><Chart {...chartBoxConversion}/></div>
        <div className="Home__box Home__box--6"><Chart {...chartBoxRevenue}/></div>
        <div className="Home__box Home__box--7">7</div>
        <div className="Home__box Home__box--8">8</div>
        <div className="Home__box Home__box--8">9</div>
        </div>
    )
}

export default Home