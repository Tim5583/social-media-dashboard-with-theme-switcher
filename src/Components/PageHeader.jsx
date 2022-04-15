import "../style/PageHeader.css";
import { useEffect, useState } from "react";

const PageHeader = (props) => {

    const [theme, setTheme] = useState(false);

    useEffect(() => {
        if (theme) {
            document.body.classList = "dark";
        }   

        if (!theme) {
            document.body.classList = "";
        }
    })


    return ( 
        <header className="header">
            <div className="headerHeader">
                <h1 className="headerHeaderH1">Social Media DashBoard</h1>
                <p>Total Followers: {props.totalFollowers}</p>
            </div>
            <hr className="hr"/>
            <div className="darkmod-switch">
                <span>Dark Mode</span>
                <input type="checkbox" className="toggle" id="themeSwitch"/>
                <label htmlFor="themeSwitch" className="label" onClick={() => setTheme(prevVal => !prevVal)}>
                    <div className="ball"></div>
                </label>

            </div>
        </header>
     );
}
 
export default PageHeader;