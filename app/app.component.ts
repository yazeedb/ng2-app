import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {NavbarComponent} from './shared/navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <router-outlet></router-outlet>
    `,
    directives: [
    	ROUTER_DIRECTIVES,
        NavbarComponent
    ]
})
@RouteConfig([
	{ path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
	{ path: '/users', name: 'Users', component: UsersComponent },
    { path: '/posts', name: 'Posts',  component: PostsComponent },
	{ path: '/*other', name: 'Home', component: HomeComponent }
])
export class AppComponent { }
