import './Main.css'
import login from '../firebase';

function Main()
{
    return(
        <div className="centerFlex" id="homepageParentDiv">
            <img id="homepageMainImg"src="https://www.niche.com/blog/wp-content/uploads/2019/01/importance-of-community-service-1200-1200x794.jpg"/>
            <div className="centerFlex" id="homepageRightDiv">
                <div className="centerFlex"><h1 id="titleHeaderMainpage">serv</h1></div>
                <div className="centerFlex" id="paragraphdiv"><p id="desc">helping students find community service opportunities</p></div>
                <div className="centerFlex"><button id="loginBtn" onClick={login}>login</button></div>
            </div>
        </div>
    )
}

export default Main;