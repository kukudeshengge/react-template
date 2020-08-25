import LoadableComponent from "../until/LoadableComponent";
let moduleFile = require.context("../page", true, /\index.js$/);
let result = moduleFile.keys().reduce((prev, item) => {
    let str = item.split("/")[item.split("/").length - 2];
    let name = str[0].toLocaleUpperCase() + str.slice(1);
    prev = Object.assign({}, prev, {
        [name]: LoadableComponent(import("../page" + item.slice(1))),
    });
    return prev;
}, {});
console.log(result);
export default [
    {
        name: "首页",
        path: "/",
        redirect: "/main",
    },
    {
        name: "首页",
        path: "/main",
        component: result.Main,
    },
    {
        name: "院校空间",
        path: "/schoolspace",
        component: result.Schoolspace,
    },
    {
        name: "高职院校",
        path: "/vocational",
        component: result.Vocational,
    },
    {
        name: "404",
        path: "/404",
        component: result.Notfound,
    },
    {
        name: "资源中心",
        path: "/resource-center",
        component: result.Resource,
        children: [
            {
                name: "资源中心首页",
                path: "/resource-center/home",
                component: result.Home,
            },
            {
                name: "资源中心列表",
                path: "/resource-center/list",
                component: result.List
            }
        ],
    },
];
