import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const addedLinks = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })
  return <nav>{addedLinks}</nav>;
}

export default NavBar;
