import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max p-5 border-t text-center border-zinc-200">
      All rights reserved.&copy; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
