import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar"> 
        <div className="logo">
          <img src="logo.svg" alt="s" />
          <span>Pushpak</span>
        </div>
        <div className="icons">
    <img src="/search.svg" alt="icons" className="icon" />
    <img src="/app.svg" alt="icons" className="icon" />
    <img src="/expand.svg" alt="icons" className="icon"/>
   <div className="notification">
<img src="/notifications.svg" alt="s" />
<span>1</span>
   </div>
      <div className="user">

      <img src="https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4473796.jpg&fm=jpg&_gl=1*1flxzz6*_ga*NzYzNDk5MzIxLjE2NzcxNDA2ODc.*_ga_8JE65Q40S6*MTY5MzE0ODE1MS4xMC4xLjE2OTMxNDgyMjQuMC4wLjA." alt="s" />
<span>users</span>
      </div>
       <img src="setting.svg" alt="s"  className="icon"/>
        </div>
    </div>
  )
}

export default Navbar
