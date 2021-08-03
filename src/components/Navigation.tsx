import Link from "next/link";
import { useState } from "react"

const Navigation = ({ menuItems, headline }: any) => {

  const [mobileMenuClass, setMobileMenuClass] = useState('hidden');

  function toggleMenu() {
    setMobileMenuClass(mobileMenuClass === 'hidden' ? 'visible' : 'hidden')
  }

  function closeMenu() {
    setMobileMenuClass('hidden')
  }
  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex w-full">
            <div className="block sm:hidden">
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">{headline}</span>
              </a>
            </div>
            <div className="hidden sm:flex w-full items-center space-x-1 justify-around">
              {menuItems.map((menuItem: any) =>
                <Link href={menuItem.page} locale={menuItem.locale} key={`${menuItem.locale}/${menuItem.page}`}>
                  <a className="py-4 px-2 text-gray-500 font-semibold hover:underline hover:text-green-500 transition duration-300">
                    {menuItem.label}
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div className="sm:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${mobileMenuClass} md:hidden mobile-menu`}>
        <ul className="">
          {menuItems.map((menuItem: any) =>
            <li key={`${menuItem.locale}/${menuItem.page}`}>
              <Link href={menuItem.page}>
                <a onClick={closeMenu} className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                  {menuItem.label}
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
      {/* <script>
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  </script> */}
    </nav>
  )
};


export default Navigation;