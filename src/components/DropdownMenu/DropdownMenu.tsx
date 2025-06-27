import {useState} from 'react';

const DropdownMenu = () => {

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="dropdown">
      <button onMouseMove={handleOpen}>Dropdown</button>
      {open && (
        <ul className="menu duration-300 transition-all">
          <li className="menu-item">
            <button>Menu 1</button>
          </li>
          <li className="menu-item">
            <button>Menu 2</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;