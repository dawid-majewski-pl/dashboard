import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./chart.scss";

type Props = {
    color: string;
    icon: string;
    title: string;
    alt: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
}

const Chart = (props:Props) => {
    return (
        <div className="Chart">
            <div className="Chart__info-container">
                <div className="Chart__header">
                    <img src={props.icon} alt={props.alt} />
                    <h2 className="Chart__title">{props.title}</h2>
                </div>
                <p className="Chart__count">{props.number}</p>
                <Link className="Chart__link" style={{color:props.color}}  to=",">View all</Link>
            </div>
            <div className="Chart__info">
                <div className="Chart__graph">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart width={300} height={100} data={props.chartData}>
                            <Tooltip
                                contentStyle={{background:"#355266", border: "none", borderRadius: "8px", padding: "4px 8px", fontSize: "16px"}}
                                labelStyle={{display:"none"}}
                                position={{x:10, y:90}}
                            />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={1}
                                dot={false}
                                />
                            </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="Chart__stats">
                    <p className="Chart__percentage" style={{color: props.percentage<0 ? "tomato" : "limegreen"}}>{props.percentage}%</p>
                    <p className="Chart__duration">this month</p>
                </div>
            </div>
        </div>
    )
}

export default Chart