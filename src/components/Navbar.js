import React,{useState, useEffect} from "react"; //useEffect for fixing the sign up icon
import {Link} from 'react-router-dom'
import'./Navbar.css';
import { Button } from "./Button";

function Navbar(){
    
    const [click,setClick]= useState (false);
    const [button,setButton]=useState(true)
    const handleClick =()=>setClick(!click) //click
    const closeMobileMenu=()=>setClick(false); //The X and menu bar 
    const showButton=()=>{
        if (window.innerWidth <=960){
            setButton(false);
        } else{
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo"onClick={closeMobileMenu}>
                        Project <i className="fab fa-typo3"></i>

                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click? 'nav-menu active':'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/'className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/spaghetti'className="nav-links" onClick={closeMobileMenu}>
                                Spaghetti
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/paper-bridge'className="nav-links" onClick={closeMobileMenu}>
                                Paper bridge
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up'className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonSyle='btn--outline'>SIGN UP</Button>}
            

                </div>

            </nav>
   
        </>
    )
    
}
export default Navbar