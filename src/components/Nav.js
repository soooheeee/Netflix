import React, { useState,useEffect } from "react";

consfirst = () => {

    const [show, setshow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scroll > 50) {
          console.log('window.scrollY',window.scrollY);
          setshow(true);
        }else{
          setshow(false);
        }
      })

      return () => {
        window.removeEventListener("scroll",() => {});
      }
    }, [third])
    
  return (
    <nav className={`nav${show && "nav_black"}`}>
        <img 
        alt='Netflix logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        className='nav_logo'
        onClick={() => window.location.reload()}
        />
                <img 
        alt='Netflix logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        className='nav_avatar'
        onClick={() => window.location.reload()}
        />
    </nav>
  )
}

export default Nav