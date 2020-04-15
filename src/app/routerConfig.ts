import { Routes } from '@angular/router';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { NewPostComponent } from './new-post/new-post.component';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: FirstPageComponent
    },
    {
        path: 'latest',
        component: LatestArticlesComponent
    },
    {
        path: 'all',
        component: AllArticlesComponent
    },
    {
        path: 'newpost',
        component: NewPostComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home'
    }
]