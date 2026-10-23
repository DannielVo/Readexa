import { Link } from "react-router";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-bg-primary backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Link
            aria-label="Về trang chính"
            className="flex items-center gap-3 focus:outline-none"
            to="/"
          >
            <img
              alt="Readexa's Logo"
              className="h-16 w-auto object-contain"
              src={assets.main_logo}
            />
          </Link>
        </div>
        {/* <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
