import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
export const Sidebar = () => {
  return (
    <Stack gap={1}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          <MdOutlineDashboardCustomize /> Dashboard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          <FaBook /> Book
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/reviews">
          <FaBook /> Reviews
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/all">
          <FaUsers /> All Users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow-history">
          <FaHistory /> Borrow History
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
          <ImProfile /> Profile
        </Link>
      </div>
    </Stack>
  );
};
