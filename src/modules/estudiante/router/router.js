import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [

 
    {
        path:"/guardar",
        component:()=> import( '../pages/GuardaEstudiante.vue')
    },
    {
        path:"/actualizar",
        component:()=> import('../pages/ActualizarEstudiante.vue')
    },
    {
        path:"/eliminar",
        component:()=> import('../pages/EliminarEstudiante.vue')
    },
    {
        path:"/buscar/:cedula",
        component: ()=> import('../pages/ConsultaEstudiante.vue')
    },
    {
        path:"/:pathMatch(.*)*",
        component: ()=> import('../pages/NoFound.vue')

    }

]

const router = createRouter({
    //configuracion
        history: createWebHashHistory(),
    //rutas
        routes
})

export default router