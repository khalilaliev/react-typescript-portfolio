import About from "../pages/About";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { ComponentType } from "react";
import Home from "../pages/Home";

export interface INavbarItem {
  path: string;
  title: string;
  element?: ComponentType;
  isActive?: boolean;
}

export const NAVBAR_ITEMS: INavbarItem[] = [
  {
    path: "/",
    title: "Home",
    element: Home,
  },
  {
    path: "/about",
    title: "About",
    element: About,
  },
  {
    path: "/blog",
    title: "Blog",
    element: Blog,
  },
  {
    path: "/projects",
    title: "Projects",
    element: Projects,
  },
  // {
  //   path: "#",
  //   title: 'Wordpress',
  //   element: DropdownMenu,
  // },
  {
    path: "/contact",
    title: "Contact",
    element: Contact,
  },
];
