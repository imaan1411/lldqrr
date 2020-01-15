import Login from "@/components/Login";
import Home from "@/components/Home";
import Create from "@/components/Create";
import Detail from "@/components/Detail";
import Edit from "@/components/Edit";

export const routes = [
    { path: '', component: Login},
    { path: "/home", component: Home},
    { path: "/create", component: Create},
    { path: "/detail/:id", component: Detail},
    { path: "/edit", component: Edit}
];