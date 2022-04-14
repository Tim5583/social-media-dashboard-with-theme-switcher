import "../style/SmallCard.css";

const SmallCard = ({data, logo}) => {
    const vote = `./images/icon-${data.todayStatus[1]}.svg`
    let classes = "SmallCard ";

    if (data.todayStatus[1] === "down") {
        classes += "down";
    }


    return ( 
        <div className={classes}>
            <div className="cardHeader">
                <p>{data.type}</p>
                <img src={logo} alt="" />
            </div>
            <div className="cardMain">
                <p className="number">{data.todayNumber}</p>
                <div className="presentage">
                    <img src={vote} alt="" />
                    <p>{data.todayStatus[0]}%</p>
                </div>
            </div>  
        </div>
     );
}
 
export default SmallCard;