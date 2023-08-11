import { useState } from "react";
import { Menu } from "semantic-ui-react";

const menuList = ["DashBoard", "Category", "Sub-Category"];
const Navbar = () => {

  const [selected, setSelected] = useState("DashBoard");
  const handleClick = (s) => {
    setSelected(s);
  };

  const ele = (
    <Menu pointing secondary>
      {menuList.map((element) => {
        return (
          <Menu.Item
            name={element}
            active={selected === element}
            onClick={()=>{ handleClick(element)}}
          />
        );
      })}
    </Menu>
  );

  return ele;
};

export default Navbar;
