// import Cardsdesign from "../components/AdminUI/CardsDesign";
// import Chat from "../components/AdminUI/Chat";
// import Contentscrollbar from "../components/AdminUI/ContentScrollbar";
// import Fullcalender from "../components/AdminUI/FullCalender";
// import Loaders from "../components/AdminUI/Loaders";
// import Notifications from "../components/AdminUI/Notifications";
// import RAngeslider from "../components/AdminUI/RangeSlider";
// import RAting from "../components/AdminUI/Ratings";
// import Ribbons from "../components/AdminUI/Ribbons";
// import Search from "../components/AdminUI/Search";
// import Sweetalerts from "../components/AdminUI/SweetAlerts";
// import SWiper from "../components/AdminUI/SwiperJS";
// import Timeline from "../components/AdminUI/TimeLine";
// import Treeview from "../components/AdminUI/TreeView";
// import Userlist from "../components/AdminUI/UserList";

// import Apexcharts from "../components/Charts/ApexCharts";
// import Chartjs from "../components/Charts/ChartJS";
// import Echarts from "../components/Charts/ECharts";

// import Formadvanced from "../components/Forms/FormAdvance";
// import Formeditor from "../components/Forms/FormEditor";
// import Formelements from "../components/Forms/FormElement";
// import Forminputspinners from "../components/Forms/FormInputSpinner";
// import Formlayouts from "../components/Forms/FormLayout";
// import Formvalidation from "../components/Forms/FormValidation";
// import Select2 from "../components/Forms/Select2";

// import Bootstrap from "../components/Icons/Bootstrap";
// import Feather from "../components/Icons/Feather";
// import Flag from "../components/Icons/Flag";
// import Fontawesome from "../components/Icons/FontAwesome";
// import Iconic from "../components/Icons/Iconic";
// import Materialdesign from "../components/Icons/MaterialDesign";
// import Pe7 from "../components/Icons/Pe7";
// import Simpleline from "../components/Icons/SimpleLine";
// import Typicon from "../components/Icons/Typicon";
// import Weather from "../components/Icons/Weather";

// import Addproduct from "../components/Pages/ECommerce/AddProduct";
// import Checkout from "../components/Pages/ECommerce/CheckOut";
// import Productdetails from "../components/Pages/ECommerce/ProductDetails";
// import Shop from "../components/Pages/ECommerce/Shop";
// import Shoppingcart from "../components/Pages/ECommerce/ShoppingCart";
// import Wishlist from "../components/Pages/ECommerce/WishList";

// import Aboutcompany from "../components/Pages/Extension/AboutCompany";
// import Blog from "../components/Pages/Extension/Blog";
// import Blogdetails from "../components/Pages/Extension/BlogDetails";
// import Blogpost from "../components/Pages/Extension/BlogPost";
// import Emptypage from "../components/Pages/Extension/EmptyPage";
// import Faq from "../components/Pages/Extension/Faq";
// import Invoice from "../components/Pages/Extension/Invoice";
// import Pricingtables from "../components/Pages/Extension/PricingTables";
// import Settings from "../components/Pages/Extension/Settings";
// import Terms from "../components/Pages/Extension/Terms";
// import Gallery from "../components/Pages/Gallery";
// import Mailinbox from "../components/Pages/MailInbox";
// import Notificationlist from "../components/Pages/NotificationList";
// import Profile from "../components/Pages/Profile";
// import Filemanager from "../components/Pages/filemanager/FileManager";
// import Filemanagerlist from "../components/Pages/filemanager/FileManagerList";
// import Datatables from "../components/Tables/DataTables";
// import Defaulttables from "../components/Tables/DefaultTables";
// import Gridtables from "../components/Tables/GridTables";

// import Accordions from "../components/UiKit/Accordions";
// import Alerts from "../components/UiKit/Alerts";
// import Avatars from "../components/UiKit/Avatars";
// import Badgespills from "../components/UiKit/BadgesPills";
// import Breadcrumbs from "../components/UiKit/BreadCrumbs";
// import Buttons from "../components/UiKit/Buttons";
// import Carousels from "../components/UiKit/Carousels";
// import Colors from "../components/UiKit/Colors";
// import Dropdowns from "../components/UiKit/Dropdowns";
// import Listgroup from "../components/UiKit/Listgroup";
// import Mediaobject from "../components/UiKit/MediaObject";
// import UIModal from "../components/UiKit/Modal";
// import Navigation from "../components/UiKit/Navigation";
// import OffCanvas from "../components/UiKit/OffCanvas";
// import Pagination from "../components/UiKit/Pagination";
// import Progress from "../components/UiKit/Progress";
// import Tabs from "../components/UiKit/Tabs";
// import Tags from "../components/UiKit/Tags";
// import ToastComponent from "../components/UiKit/ToastComponent";
// import Tooltippopover from "../components/UiKit/TooltipPopover";
// import Typography from "../components/UiKit/Typography";

// import Widgets from "../components/Widgets/Widgets";

import Indexpage from "../components/Dashboard/IndexPage";
import ViewProduct from "../components/Products/Components/ViewProduct";
import SignIn from "../components/Authentication/SignIn";
import ViewSubCategory from "../components/Products/Components/ViewSubCategory";
import AddCategoryForm from "../components/Products/Components/AddCategoryForm";
import AddProductForm from "../components/Products/Components/AddProductForm";
// import ViewUsers from "../components/Products/ViewUsers";
// import ViewEmployee from "../components/Products/ViewEmployee";
import ViewCategory from "../components/Products/Components/ViewCategory";
import AddSubCategoryForm from "../components/Products/Components/AddSubCategoryForm";
import EditCategoryFrom from "../components/Products/Components/EditCategoryForm";
import EditProductForm from "../components/Products/Components/EditProductForm";
import EditSubCategoryForm from "../components/Products/Components/EditSubCategoryForm";

export interface routeType {
  id: number;
  path: string;
  element: JSX.Element;
  componentName?: string;
}

export const RouteData: routeType[] = [
  {
    id: 1,
    path: `${import.meta.env.BASE_URL}Dashboard/IndexPage`,
    element: <Indexpage />,
  },

  // { id: 2, path: `${import.meta.env.BASE_URL}Pages/Profile`, element: <Profile /> },
  // { id: 3, path: `${import.meta.env.BASE_URL}Pages/NotificationList`, element: <Notificationlist /> },
  // { id: 4, path: `${import.meta.env.BASE_URL}Pages/MailInbox`, element: <Mailinbox /> },
  // { id: 5, path: `${import.meta.env.BASE_URL}Pages/Gallery`, element: <Gallery /> },

  // { id: 6, path: `${import.meta.env.BASE_URL}Pages/Extension/AboutCompany`, element: <Aboutcompany /> },
  // { id: 7, path: `${import.meta.env.BASE_URL}Pages/Extension/Blog`, element: < Blog /> },
  // { id: 8, path: `${import.meta.env.BASE_URL}Pages/Extension/Faq`, element: < Faq /> },
  // { id: 9, path: `${import.meta.env.BASE_URL}Pages/Extension/Terms`, element: <Terms /> },
  // { id: 10, path: `${import.meta.env.BASE_URL}Pages/Extension/Invoice`, element: < Invoice /> },
  // { id: 11, path: `${import.meta.env.BASE_URL}Pages/Extension/PricingTables`, element: <Pricingtables /> },
  // { id: 12, path: `${import.meta.env.BASE_URL}Pages/Extension/Settings`, element: <Settings /> },
  // { id: 13, path: `${import.meta.env.BASE_URL}Pages/Extension/BlogDetails`, element: <Blogdetails /> },
  // { id: 14, path: `${import.meta.env.BASE_URL}Pages/Extension/BlogPost`, element: < Blogpost /> },
  // { id: 15, path: `${import.meta.env.BASE_URL}Pages/Extension/EmptyPage`, element: < Emptypage /> },

  // { id: 16, path: `${import.meta.env.BASE_URL}Pages/filemanager/FileManager`, element: <Filemanager /> },
  // { id: 17, path: `${import.meta.env.BASE_URL}Pages/filemanager/FileManagerList`, element: <Filemanagerlist /> },

  // { id: 18, path: `${import.meta.env.BASE_URL}Pages/ECommerce/Shop`, element: <Shop /> },
  // { id: 19, path: `${import.meta.env.BASE_URL}Pages/ECommerce/ProductDetails`, element: <Productdetails /> },
  // { id: 20, path: `${import.meta.env.BASE_URL}Pages/ECommerce/ShoppingCart`, element: <Shoppingcart /> },
  // { id: 21, path: `${import.meta.env.BASE_URL}Pages/ECommerce/AddProduct`, element: <Addproduct /> },
  // { id: 22, path: `${import.meta.env.BASE_URL}Pages/ECommerce/WishList`, element: <Wishlist /> },
  // { id: 23, path: `${import.meta.env.BASE_URL}Pages/ECommerce/CheckOut`, element: <Checkout /> },

  // { id: 24, path: `${import.meta.env.BASE_URL}Widgets/Widgets`, element: <Widgets /> },

  // { id: 25, path: `${import.meta.env.BASE_URL}UiKit/Alerts`, element: <Alerts /> },
  // { id: 26, path: `${import.meta.env.BASE_URL}UiKit/Buttons`, element: <Buttons /> },
  // { id: 27, path: `${import.meta.env.BASE_URL}UiKit/Colors`, element: <Colors /> },
  // { id: 28, path: `${import.meta.env.BASE_URL}UiKit/Avatars`, element: <Avatars /> },
  // { id: 29, path: `${import.meta.env.BASE_URL}UiKit/Dropdowns`, element: <Dropdowns /> },
  // { id: 30, path: `${import.meta.env.BASE_URL}UiKit/Listgroup`, element: <Listgroup /> },
  // { id: 31, path: `${import.meta.env.BASE_URL}UiKit/Tags`, element: <Tags /> },
  // { id: 32, path: `${import.meta.env.BASE_URL}UiKit/Pagination`, element: <Pagination /> },
  // { id: 33, path: `${import.meta.env.BASE_URL}UiKit/Navigation`, element: <Navigation /> },
  // { id: 34, path: `${import.meta.env.BASE_URL}UiKit/Typography`, element: <Typography /> },
  // { id: 35, path: `${import.meta.env.BASE_URL}UiKit/BreadCrumbs`, element: <Breadcrumbs /> },
  // { id: 36, path: `${import.meta.env.BASE_URL}UiKit/BadgesPills`, element: <Badgespills /> },
  // { id: 37, path: `${import.meta.env.BASE_URL}UiKit/OffCanvas`, element: <OffCanvas /> },
  // { id: 38, path: `${import.meta.env.BASE_URL}UiKit/ToastComponent`, element: <ToastComponent /> },
  // { id: 39, path: `${import.meta.env.BASE_URL}UiKit/MediaObject`, element: <Mediaobject /> },
  // { id: 40, path: `${import.meta.env.BASE_URL}UiKit/Accordions`, element: <Accordions /> },
  // { id: 41, path: `${import.meta.env.BASE_URL}UiKit/Tabs`, element: <Tabs /> },
  // { id: 42, path: `${import.meta.env.BASE_URL}UiKit/Modal`, element: <UIModal /> },
  // { id: 43, path: `${import.meta.env.BASE_URL}UiKit/TooltipPopover`, element: <Tooltippopover /> },
  // { id: 44, path: `${import.meta.env.BASE_URL}UiKit/Progress`, element: <Progress /> },
  // { id: 45, path: `${import.meta.env.BASE_URL}UiKit/Carousels`, element: <Carousels /> },

  // { id: 46, path: `${import.meta.env.BASE_URL}Icons/FontAwesome`, element: <Fontawesome /> },
  // { id: 47, path: `${import.meta.env.BASE_URL}Icons/MaterialDesign`, element: <Materialdesign /> },
  // { id: 48, path: `${import.meta.env.BASE_URL}Icons/SimpleLine`, element: <Simpleline /> },
  // { id: 49, path: `${import.meta.env.BASE_URL}Icons/Feather`, element: <Feather /> },
  // { id: 50, path: `${import.meta.env.BASE_URL}Icons/Iconic`, element: <Iconic /> },
  // { id: 51, path: `${import.meta.env.BASE_URL}Icons/Flag`, element: <Flag /> },
  // { id: 52, path: `${import.meta.env.BASE_URL}Icons/Pe7`, element: <Pe7 /> },
  // { id: 53, path: `${import.meta.env.BASE_URL}Icons/Typicon`, element: <Typicon /> },
  // { id: 54, path: `${import.meta.env.BASE_URL}Icons/Weather`, element: <Weather /> },
  // { id: 55, path: `${import.meta.env.BASE_URL}Icons/Bootstrap`, element: <Bootstrap /> },

  // { id: 56, path: `${import.meta.env.BASE_URL}AdminUI/CardsDesign`, element: <Cardsdesign /> },
  // { id: 57, path: `${import.meta.env.BASE_URL}AdminUI/FullCalender`, element: <Fullcalender /> },
  // { id: 58, path: `${import.meta.env.BASE_URL}AdminUI/Chat`, element: <Chat /> },
  // { id: 59, path: `${import.meta.env.BASE_URL}AdminUI/Notifications`, element: <Notifications /> },
  // { id: 60, path: `${import.meta.env.BASE_URL}AdminUI/SweetAlerts`, element: <Sweetalerts /> },
  // { id: 61, path: `${import.meta.env.BASE_URL}AdminUI/RangeSlider`, element: <RAngeslider /> },
  // { id: 62, path: `${import.meta.env.BASE_URL}AdminUI/ContentScrollbar`, element: <Contentscrollbar /> },
  // { id: 63, path: `${import.meta.env.BASE_URL}AdminUI/Loaders`, element: <Loaders /> },
  // { id: 64, path: `${import.meta.env.BASE_URL}AdminUI/Ratings`, element: <RAting /> },
  // { id: 65, path: `${import.meta.env.BASE_URL}AdminUI/TimeLine`, element: <Timeline /> },
  // { id: 66, path: `${import.meta.env.BASE_URL}AdminUI/TreeView`, element: <Treeview /> },
  // { id: 67, path: `${import.meta.env.BASE_URL}AdminUI/Ribbons`, element: <Ribbons /> },
  // { id: 68, path: `${import.meta.env.BASE_URL}AdminUI/SwiperJS`, element: <SWiper /> },
  // { id: 69, path: `${import.meta.env.BASE_URL}AdminUI/UserList`, element: <Userlist /> },
  // { id: 70, path: `${import.meta.env.BASE_URL}AdminUI/Search`, element: <Search /> },

  // { id: 71, path: `${import.meta.env.BASE_URL}Forms/FormElement`, element: <Formelements /> },
  // { id: 72, path: `${import.meta.env.BASE_URL}Forms/FormLayout`, element: <Formlayouts /> },
  // { id: 73, path: `${import.meta.env.BASE_URL}Forms/FormAdvance`, element: <Formadvanced /> },
  // { id: 74, path: `${import.meta.env.BASE_URL}Forms/FormEditor`, element: <Formeditor /> },
  // { id: 75, path: `${import.meta.env.BASE_URL}Forms/FormValidation`, element: <Formvalidation /> },
  // { id: 76, path: `${import.meta.env.BASE_URL}Forms/FormInputSpinner`, element: <Forminputspinners /> },
  // { id: 77, path: `${import.meta.env.BASE_URL}Forms/Select2`, element: <Select2 /> },

  // { id: 78, path: `${import.meta.env.BASE_URL}Tables/DefaultTables`, element: <Defaulttables /> },
  // { id: 79, path: `${import.meta.env.BASE_URL}Tables/DataTabless`, element: <Datatables /> },
  // { id: 80, path: `${import.meta.env.BASE_URL}Tables/GridTables`, element: <Gridtables /> },

  // { id: 81, path: `${import.meta.env.BASE_URL}Maps/LeafletMap`, element: <Leafletmaps /> },
  // { id: 82, path: `${import.meta.env.BASE_URL}Maps/SimpleMap`, element: <Simplemap /> },

  // { id: 83, path: `${import.meta.env.BASE_URL}Charts/ChartJS`, element: <Chartjs /> },
  // { id: 84, path: `${import.meta.env.BASE_URL}Charts/ECharts`, element: <Echarts /> },
  // { id: 85, path: `${import.meta.env.BASE_URL}Charts/ApexCharts`, element: <Apexcharts /> },

  {
    id: 86,
    path: `${import.meta.env.BASE_URL}Products/ViewCategory`,
    element: <ViewCategory />,
  },
  {
    id: 87,
    path: `${import.meta.env.BASE_URL}Products/ViewProducts`,
    element: <ViewProduct />,
  },
  {
    id: 88,
    path: `${import.meta.env.BASE_URL}Authentication/SignIn`,
    element: <SignIn />,
  },
  {
    id: 89,
    path: `${import.meta.env.BASE_URL}Products/ViewSubCategory`,
    element: <ViewSubCategory />,
  },
  {
    id: 90,
    path: `${import.meta.env.BASE_URL}Products/AddCategoryForm`,
    element: <AddCategoryForm />,
  },
  {
    id: 91,
    path: `${import.meta.env.BASE_URL}Products/AddProductForm`,
    element: <AddProductForm />,
  },
  // { id: 92, path: `${import.meta.env.BASE_URL}Products/ViewUsers`, element: <ViewUsers /> },
  // { id: 92, path: `${import.meta.env.BASE_URL}Products/ViewEmployee`, element: <ViewEmployee /> },
  {
    id: 93,
    path: `${import.meta.env.BASE_URL}Products/AddSubCategoryForm`,
    element: <AddSubCategoryForm />,
  },
  {
    id: 94,
    path: `${import.meta.env.BASE_URL}Products/EditCategoryFrom/:id`,
    element: <EditCategoryFrom />,
  },
  {
    id: 95,
    path: `${import.meta.env.BASE_URL}Products/EditProductFrom/:id`,
    element: <EditProductForm />,
  },
  {
    id: 96,
    path: `${import.meta.env.BASE_URL}Products/EditSubCategoryForm/:id`,
    element: <EditSubCategoryForm />,
  },
];
