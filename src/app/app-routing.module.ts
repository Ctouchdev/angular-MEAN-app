
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostList } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HomeSearchBar } from './home-search-bar/home-search-bar.component';
import { HomeCarousel } from './home-carousel/home-carousel.component';
import { HomeFeaturedItems } from './featured-items/home-featured-items.component';
import { HomePopularCategories } from './home-popular-categories/home-popular-categories.component';

const routes: Routes = [

  { path: 'shop', component: HomePopularCategories },
  { path: 'test', component: HomeFeaturedItems },
  { path: '', outlet: 'carousel', component: HomeCarousel, pathMatch: 'full' },
  { path: '', outlet: 'searchBar', component: HomeSearchBar, pathMatch: 'full' },
  { path: '', outlet: 'featuredItems', component: HomeFeaturedItems, pathMatch: 'full' },
  { path: '', outlet: 'popularCategories', component: HomePopularCategories, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}


