import { NavLink, useNavigate } from "react-router-dom";


function Header(props) {
    const navigate = useNavigate();



    return (


        <header>
        <div>
          <h3>
            <NavLink>My Portfolio</NavLink>
          </h3>
        </div>
  
        <nav>
          <NavLink  >
            About Me
          </NavLink>
          <NavLink >
            Portfolio
          </NavLink>
          <NavLink >
            Contact Me
          </NavLink>S
        </nav>
      </header>
    );



    }


export default Header;













}
