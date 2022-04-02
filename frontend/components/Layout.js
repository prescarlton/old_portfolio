import { useState } from "react";
import Header from "./Header";

const { Navbar } = require("./navbar");

export default function Layout({ pageTitle, children, active = pageTitle }) {
    const [showNav, setShowNav] = useState(false);
    const toggleNadv = () => {
        setShowNav(!showNav);
    };
    return (
        <div className="h-screen flex flex-col relative">
            <Navbar
                active={active}
                showFullNav={showNav}
                handleNavToggle={toggleNadv}
            />
            <div className="flex flex-col flex-1 p-6 pb-12 md:px-28 items-stretch">
                <Header title={pageTitle} />
                {children}
            </div>
        </div>
    );
}
