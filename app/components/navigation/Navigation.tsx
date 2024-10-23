import { useEffect, useRef, useState } from "react";
import { DropdownItem, DropdownMenu, NavItem, NavItemsWrapper, DisplayWrapper } from "./style";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleContactClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const navigationData = [
    { title: "Home |", route: "/" },
    { title: "Expeditions" }, // No route here
    { title: "|  Our Story & Missions |", route: "/story" },
    { title: "Contact Us" }, // No route needed
  ];

  const dropdownItems = [
    { title: "Amadablam", route: "/amaDablam" },
    { title: "Lobuche", route: "/Lobuche" },
    { title: "Everest Base Camp", route: "/everestBaseCamp" },
    { title: "Island Peak", route: "/islandPeak" },
  ];

  return (
    <DisplayWrapper>
      <NavItemsWrapper>
        {navigationData.map((item) => {
          console.log(item.route);

          if (item.title === "Contact Us") {
            return (
              <NavItem href={item.route} onClick={handleContactClick} key={item.title} as="div" style={{ cursor: "pointer" }}>
                {item.title}
              </NavItem>
            );
          }

          if (item.title === "Expeditions") {
            return (
              <div key={item.title} style={{ position: "relative" }} ref={dropdownRef}>
                <NavItem href={"/"} onClick={handleDropdownToggle} as="div" style={{ cursor: "pointer" }}>
                  {item.title} ▼
                </NavItem>
                {isDropdownOpen && (
                  <DropdownMenu>
                    {dropdownItems.map((dropdownItem) => (
                      <DropdownItem key={dropdownItem.title} href={dropdownItem.route}>
                        {dropdownItem.title}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </div>
            );
          }

          return (
            <div key={item.title}>
              <NavItem href={item.route} as={item.route ? "a" : "div"}>
                {item.title}
              </NavItem>
            </div>
          );
        })}
      </NavItemsWrapper>
    </DisplayWrapper>
  );
};

export default Navigation;
