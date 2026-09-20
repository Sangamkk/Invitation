import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        z-[1000]

        h-[65px]
        w-full

        bg-white/50

        border-b
        border-white/30
      "
    >
      {/* Inner content */}
      <div
        className="
          mx-auto
          grid
          h-full
          w-full
          max-w-[1050px]
          grid-cols-3
          items-center
        "
      >

        {/* HOME */}
        <NavLink
          to="/"
          className={({ isActive }) => `
            justify-self-start

            font-['Playfair_Display']
            text-[21px]
            no-underline
            outline-none

            ${
              isActive
                ? "font-semibold text-[#98506a]"
                : "text-[#ed9ab4]"
            }
          `}
        >
          Home
        </NavLink>


        {/* STORY */}
        <NavLink
          to="/story"
          className={({ isActive }) => `
            justify-self-center

            font-['Playfair_Display']
            text-[20px]
            no-underline
            outline-none

            ${
              isActive
                ? "font-semibold text-[#98506a]"
                : "text-[#ed9ab4]"
            }
          `}
        >
          Story
        </NavLink>


        {/* GALLERY */}
        <NavLink
          to="/gallery"
          className={({ isActive }) => `
            justify-self-end

            font-['Playfair_Display']
            text-[20px]
            no-underline
            outline-none

            ${
              isActive
                ? "font-semibold text-[#98506a]"
                : "text-[#ed9ab4]"
            }
          `}
        >
          Gallery
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;