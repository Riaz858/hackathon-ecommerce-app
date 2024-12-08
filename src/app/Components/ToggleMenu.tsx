// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { FaAngleDown } from "react-icons/fa";

// const ToggleMenu = ({ title, items }: { title: string; items: { label: string; path: string }[] }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative font-normal">
//       {/* Button to open dropdown */}
//       <button className="flex items-center space-x-2" onClick={toggleDropdown}>
//         <span>{title}</span>
//         <span>
//           <FaAngleDown className="transform transition-transform" />
//         </span>
//       </button>

//       {/* Dropdown menu */}
//       {isOpen && (
//         <ul className="absolute right-0 mt-2 w-32 bg-white text-black shadow-lg">
//           {items.map((item, index) => (
//             <li
//               key={index}
//               className="px-4 py-2 cursor-pointer hover:bg-gray-200"
//               onClick={() => setIsOpen(false)} // close dropdown on click
//             >
//               <Link href={item.path}>{item.label}</Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ToggleMenu;

import { useState } from "react";

const ToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopNowOpen, setIsShopNowOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleShopNow = () => {
    setIsShopNowOpen(!isShopNowOpen);
  };
  return (

      <div>
        <button></button>
      </div>
  )
};

export default ToggleMenu;
