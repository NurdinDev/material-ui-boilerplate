import * as React from 'react';


export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
    type?: 'public' | 'private';
}

export const routes: IRoute[] = [
    // {
    //     path: '/test',
    //     component: Test
    // }
];
