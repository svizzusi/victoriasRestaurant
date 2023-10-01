import logo from '../../assets/images/logo.webp'
import style from './NavBar.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const [navExpanded, setNavExpanded] = useState(false)
    const navigate = useNavigate()

    const openNav = () => {
        setNavExpanded(!navExpanded)
    }
    const closeNav = () => setNavExpanded(false)

    return (
        <header>
            <nav className={style.nav}>
                <Link 
                  to={'/'}>
                  <img 
                    className={style.logo} 
                    src={logo} 
                    alt={logo} 
                  />
                </Link>
                <ul 
                className={navExpanded ? `${style.navLinks} ${style.expanded}` : style.navLinks}
                >
                  <li>
                      <span  
                          onClick={() => { 
                            closeNav()
                            navigate('/') 
                        }}
                      >Home</span>
                  </li>
                  <li>
                      <span 
                          onClick={() => { 
                            closeNav()
                            navigate('/about')
                          }}
                      >About</span>
                  </li>
                  <li>
                      <span 
                          onClick={() => { 
                            closeNav()
                            navigate('/contact')
                          }}
                      >Contact</span>
                  </li>
                </ul>
                <div 
                    className={navExpanded ? `${style['icon-three']} ${style['active-three']}` : style['icon-three']}
                    onClick={openNav}
                >
                    <div className={`${style['hamburger']} ${style['hamburger-three']}`}></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
