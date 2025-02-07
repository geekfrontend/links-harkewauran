import React from "react";
import ToggleTheme from "@/components/shared/ToggleTheme";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const Header = ({ children }: ILayout) => {
  return <div className="max-w-[480px] md:rounded-t-xl">{children}</div>;
};

const Main = ({ children }: ILayout) => {
  return <main className="p-4 pb-0">{children}</main>;
};

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-6">
      <div className="text-center">
        <ToggleTheme />
        <p className="text-base text-gray-400 my-4">
          © {new Date().getFullYear()} harkewauran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

Layout.Header = Header;
Layout.Main = Main;
Layout.Footer = Footer;

export default Layout;
