// src/routes.ts
import GlobalLayout from "./pages/_layout";
import Homepage from "./pages/Homepage/Homepage";
import CheckResvRoom from "./pages/CheckResvRoom/CheckResvRoom"
import CheckResvAmen from "./pages/CheckResvAmen/CheckResvAmen"
import CheckResvTraf from "./pages/CheckResvTraf/CheckResvTraf"
import AdminCheckAmenCat from "./pages/AdminCheckAmenCat/AdminCheckAmenCat"
import AdminCheckRoomCat from "./pages/AdminCheckRoomCat/AdminCheckRoomCat"
import AdminCheckResvRoom from "./pages/AdminCheckResvRoom/AdminCheckResvRoom";
import ResvRoom from "./pages/ResvRoom/ResvRoom";
import ResvAmen from "./pages/ResvAmen/ResvAmen";
import ResvTraf from "./pages/ResvTraf/ResvTraf";
import AdminAddRoomCat from "./pages/AdminAddRoomCat/AdminAddRoomCat";
import TrafficPay from "./pages/TrafficPay/TrafficPay";
import ResvRoomPay from "./pages/ResvRoomPay/ResvRoomPay";
import WalfarePay from "./pages/WalfarePay/WalfarePay";
import Login from "./pages/UserLogin/UserLogin";
import SignupNormal from "./pages/Signup/SignupNormal";
import AdminResvRoom from "./pages/AdminResvRoom/AdminResvRoom";
import AdminManageRoom from "./pages/AdminManageRoom/AdminManageRoom";
import AdminAddRoom from "./pages/AdminAddRoom/AdminAddRoom";
import AdminModifyRoom from "./pages/AdminModifyRoom/AdminModifyRoom";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/homepage", element: <Homepage /> },
      { path: "/checkResvRoom", element: <CheckResvRoom /> },
      { path: "/checkResvAmen", element: <CheckResvAmen /> },
      { path: "/checkResvTraf", element: <CheckResvTraf /> },
      { path: "/adminCheckAmenCat", element: <AdminCheckAmenCat /> },
      { path: "/adminCheckRoomCat", element: <AdminCheckRoomCat /> },
      { path: "/adminCheckResvRoom", element: <AdminCheckResvRoom /> },
      { path: "/resvRoom", element: <ResvRoom /> },
      { path: "/resvAmen", element: <ResvAmen /> },
      { path: "/resvTraf", element: <ResvTraf /> },
      { path: "/adminAddRoomCat", element: <AdminAddRoomCat /> },
      { path: "/payRoom", element: <ResvRoomPay /> },
      { path: "/payTraf", element: <TrafficPay /> },
      { path: "/payAmen", element: <WalfarePay /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignupNormal /> },
      { path: "/adminResvRoom", element: <AdminResvRoom /> },
      { path: "/adminManageRoom", element: <AdminManageRoom /> },
      { path: "/adminAddRoom", element: <AdminAddRoom /> },
      { path: "/adminModifyRoom", element: <AdminModifyRoom /> },
    ]
  }
];

export const pages = [
  { route: "/" },
  { route: "/homepage" },
  { route: "/checkResvRoom" },
  { route: "/checkResvAmen" },
  { route: "/checkResvTraf" },
  { route: "/adminCheckAmenCat" },
  { route: "/adminCheckRoomCat" },
  { route: "/adminCheckResvRoom" },
  { route: "/resvRoom" },
  { route: "/resvAmen" },
  { route: "/resvTraf" },
  { route: "/adminAddRoomCat" },
  { route: "/payRoom" },
  { route: "/payTraf" },
  { route: "/payAmen" },
  { route: "/login" },
  { route: "/signup" },
  { route: "/adminResvRoom" },
  { route: "/adminManageRoom" },
  { route: "/adminAddRoom" },
  { route: "/adminModifyRoom" },
]; // 페이지 목록에 새로운 라우트를 추가
