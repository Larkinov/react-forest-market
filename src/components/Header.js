import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to ="/">
        <div className="headerLeft">
          <img src="/img/logo.png" width={40} height={40} />
          <div className="headerInfo">
            <h3>React Forest</h3>
            <p>Магазин леса</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li style={{cursor:"pointer"}} onClick={props.onClickCart}>
          <img src="/img/buy.svg" width={18} height={18} />
          <span>1205 руб.</span>
        </li>
        <li style={{cursor:"pointer"}}>
          <Link to="/favorites">
            <img src="/img/heart-line.svg" width={18} height={18} />
          </Link>
        </li>
        <li>
          <img src="/img/user.svg" width={18} height={18} />
        </li>
      </ul>
    </header>
  );
}

export default Header;