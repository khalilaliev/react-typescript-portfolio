import { FC } from "react";

type WithTitle = { title: string; id?: string | number };

type SidebarProps = {
  data: WithTitle[];
  selectedId: string | number | null;
  onSelect: (id: string | number) => void;
};

const Sidebar: FC<SidebarProps> = ({ data, selectedId, onSelect }) => {
  return (
    <aside className="sidebar max-w-[23rem!important] h-fit justify-start bg-white rounded-lg shadow-lg dark:bg-[#16181a]">
      <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
        <nav className="menu rounded-md">
          <section className="menu-section px-4">
            <h3 className="menu-title text-xl font-bold px-4 dark:text-white">
              My Blogs
            </h3>
            <ul className="menu-items">
              {data.map((item) => {
                const isActive = selectedId === item.id;
                return (
                  <li
                    onClick={() => item.id != null && onSelect(item.id)}
                    className="menu-item custom-list group"
                    key={item.id ?? item.title}
                  >
                    <button
                      className={`${isActive ? "text-blue-500" : ""} text-left dark:text-white group-hover:text-black`}
                    >
                      {item.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </nav>
      </section>
    </aside>
  );
};

export default Sidebar;
