import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
 
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useState } from "react";
import { Link } from 'react-router-dom';

function NavBar() {

  const [sidebarState,setSidebar] = useState(false)

  return (
    <Sidebar style={{ height: "100vh" }} collapsed={sidebarState} >
      <Menu>
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            setSidebar(!sidebarState)
          }}
          style={{ textAlign: "center" }}
        >
          {" "}
          <h2>Admin</h2>
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem  icon={<DynamicFeedIcon />}> Category Master <Link to="/" /></MenuItem>
        <MenuItem  icon={<LocalFireDepartmentIcon />}> Sub Category Master <Link to="/sub-category" /></MenuItem>
        <MenuItem  icon={<LocalFireDepartmentIcon />}> sub Sub Category Master <Link to="/sub-sub-category" /></MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default NavBar;
