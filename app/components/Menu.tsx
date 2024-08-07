"use client";
import React, { useState } from "react";
import MenuList from "./MenuList";
import Image from "next/image";
import Link from "next/link";
import MenuMobile from "./MenuMobile";

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="container m-auto py-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/coderhouse-logo.png"}
            alt="menu-logo"
            height={100}
            width={100}
          />
        </Link>
        <div className="hidden lg:block">
          <MenuList open={open} handleClose={handleClose} />
        </div>

        <div onClick={handleOpen} className="lg:hidden">
          <Image
            src={"/burguer-menu.png"}
            alt="menu-logo"
            height={40}
            width={40}
          />
        </div>
      </div>
      <MenuMobile open={open} handleClose={handleClose} />
    </>
  );
};

export default Menu;
