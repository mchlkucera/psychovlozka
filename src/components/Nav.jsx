import React from "react";

const Nav = ({ signOut }) => {
   return (
      <div
         data-animation="default"
         data-collapse="medium"
         data-duration={400}
         data-easing="ease"
         data-easing2="ease"
         role="banner"
         className="nav w-nav"
      >
         <div className="container nav_container w-container">
            <div className="w-nav-button">
               <div className="w-icon-nav-menu" />
            </div>
            <div className="nav__desktop-container">
               <a href="/" className="nav_logo-link w-nav-brand">
                  <img
                     src="images/logo-vertical.png"
                     loading="lazy"
                     alt=""
                     className="nav_logo"
                  />
               </a>
               <nav role="navigation" className="nav_links w-nav-menu">
                  <a
                     href="/"
                     aria-current="page"
                     className="w-nav-link w--current"
                  >
                     Aplikace
                  </a>
                  <a href="navod" className="w-nav-link">
                     Návod
                  </a>
                  <a href="vsechny-otazky" className="w-nav-link">
                     Všechny otázky
                  </a>
                  <a href="study-buddy" className="w-nav-link">
                     Study buddy
                  </a>
                  <div
                     data-hover="true"
                     data-delay={30}
                     className="dropdown w-dropdown"
                  >
                     <div className="dropdown-toggle w-dropdown-toggle">
                        <div className="user-icon w-embed">
                           <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.51 15.38 14.93 16.28C13.57 17.36 11.86 18 10 18C8.14 18 6.43 17.36 5.07 16.28ZM16.36 14.83C14.93 13.09 11.46 12.5 10 12.5C8.54 12.5 5.07 13.09 3.64 14.83C2.62 13.49 2 11.82 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 11.82 17.38 13.49 16.36 14.83V14.83ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM10 9C9.17 9 8.5 8.33 8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.33 10.83 9 10 9Z"
                                 fill="#304FE8"
                              />
                           </svg>
                        </div>
                        <div className="text-block-3">Michal Kučera</div>
                     </div>
                     <nav className="dropdown-list w-dropdown-list">
                        <a
                           onClick={() => signOut()}
                           href="#"
                           className="log-out w-inline-block"
                        >
                           <div className="user-icon w-embed">
                              <svg
                                 width={24}
                                 height={24}
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
                                    fill="#304FE8"
                                 />
                              </svg>
                           </div>
                           <div>Odhlásit se</div>
                        </a>
                     </nav>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
};

export default Nav;
