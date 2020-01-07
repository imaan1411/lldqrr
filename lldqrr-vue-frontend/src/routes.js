import Login from "@/components/Login";
import Home from "@/components/Home";
import Create from "@/components/Create";

export const routes = [
    { path: '', component: Login},
    { path: "/home", component: Home},
    { path: "/create", component: Create}
];