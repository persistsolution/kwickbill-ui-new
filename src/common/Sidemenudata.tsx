let dashboardsvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="side-menu__icon"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
  </svg>
);

export interface MenuItemtype {
  menutitle?: string;
  path?: string;
  title?: string;
  icon?: any;
  type?: "link" | "empty" | "sub";
  active?: boolean;
  selected?: boolean;
  dirchange?: boolean;
  children?: MenuItemtype[];
  badgetxt?: string;
  class?: string;
  menusub?: boolean;
}

export const MENUITEMS: MenuItemtype[] = [
  {
    menutitle: "MAIN",
  },
  {
    path: `${import.meta.env.BASE_URL}Dashboard/IndexPage`,
    title: "Dashboard",
    icon: dashboardsvg,
    type: "link",
    active: false,
    selected: false,
    dirchange: false,
  },

  {
    menutitle: "PRODUCTS",
  },

  {
    path: `${import.meta.env.BASE_URL}Products/AddCategoryForm`,
    title: "Add Category",
    icon: dashboardsvg,
    type: "link",
    active: false,
    selected: false,
    dirchange: false,
  },
  {
    path: `${import.meta.env.BASE_URL}Products/ViewCategory`,
    title: "View Category",
    icon: dashboardsvg,
    type: "link",
    active: false,
    selected: false,
    dirchange: false,
  },
  {
    path: `${import.meta.env.BASE_URL}Products/AddSubCategoryForm`,
    title: "Add Sub Categories",
    icon: dashboardsvg,
    type: "link",
    active: false,
    selected: false,
    dirchange: false,
  },
  {
    path: `${import.meta.env.BASE_URL}Products/ViewSubCategory`,
    title: "View Sub Categories",
    icon: dashboardsvg,
    type: "link",
    active: false,
    selected: false,
    dirchange: false,
  },
  {
    path: `${import.meta.env.BASE_URL}Products/AddProductForm`,
    title: "Add Products",
    icon: dashboardsvg,
    type: "link",
    active: false,
    selected: false,
    dirchange: false,
  },
  {
    path: `${import.meta.env.BASE_URL}Products/ViewProducts`,
    title: "View Products",
    icon: dashboardsvg,
    type: "link",
    active: false,
    selected: false,
    dirchange: false,
  },
  //
];

export interface MenuItem {
  label: string;
  type: string;
  href?: string;
  isOpen?: boolean;
  class?: string;
  childrenClass?: string;
  children?: MenuItem[];
}

export const LandingMenuData: MenuItem[] = [
  { label: "Home", type: "link", href: "#home" },
  { label: "Features", type: "link", href: "#features" },
  { label: "About", type: "link", href: "#about" },
  { label: "Clients", type: "link", href: "#clients" },
  { label: "Faq's", type: "link", href: "#faqs" },
  { label: "Contact", type: "link", href: "#contact" },
];
