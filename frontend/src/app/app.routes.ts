import { Routes } from '@angular/router';
import { StoriesComponent } from './features/stories/stories.component';
import { authGuard } from './features/auth/auth.guard';


export const appRoutes: Routes = [ 
    {
        path: 'stories',
        component: StoriesComponent,
        canActivate: [authGuard], // 🔒 protect this route
    },
    {
        path: '',
        redirectTo: 'stories',
        pathMatch: 'full',
    }
];
