import "../style/SmallCard.css";

const SmallCard = ({data, logo}) => {
    const vote = `./images/icon-${data.todayStatus[1]}.svg`
    return ( 
        <div className="SmallCard">
            <div className="cardHeader">
                <p>{data.type}</p>
                <img src={logo} alt="" />
            </div>
            <div className="cardMain">
                <p>{data.todayNumber}</p>
                <div>
                    <img src={vote} alt="" />
                    <p>{data.todayStatus[0]}%</p>
                </div>
            </div>  
        </div>
     );
}
 
export default SmallCard;