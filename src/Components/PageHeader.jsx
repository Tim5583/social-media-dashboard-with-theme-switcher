import "../style/PageHeader.css";

const PageHeader = (props) => {
    return ( 
        <header className="header">
            <div className="headerHeader">
                <h1 className="headerHeaderH1">Social Media DashBoard</h1>
                <p>Total Followers: {props.totalFollowers}</p>
            </div>
            <div className="darkmod-switch">
                <span>Dark Mode</span>
                <input type="checkbox" className="toggle" id="themeSwitch" />
                <label htmlFor="themeSwitch" className="label">
                    <div className="ball"></div>
                </label>

            </div>
        </header>
     );
}
 
export default PageHeader;