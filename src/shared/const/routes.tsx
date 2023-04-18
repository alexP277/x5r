import {ReactNode} from 'react';
import App from "../../App";
import Products from "../../pages/products";
import Clusters from "../../pages/clusters";
import Groups from "../../pages/groups";


export type RoutesType = {
    // Временное решение в связи с неверно сгенерированными ДТО с бэка см ДТО generated.ts 273 строка
    id: number | null | undefined;
    label: string | null | undefined;
    url: string;
    component: ReactNode;
};

export const routes: RoutesType[] = [
    {
        id: 1,
        label: 'Products',
        url: '/',
        component:<Products />,
    },
    {
        id: 2,
        label: 'Groups',
        url: '/groups',
        component:<Groups />,
    },
    {
        id: 3,
        label: 'Clusters',
        url: '/clusters',
        component:<Clusters />,
    },

];
