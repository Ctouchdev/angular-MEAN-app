import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostList } from './posts/post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeSearchBar } from './home-search-bar/home-search-bar.component';
import { HomeCarousel } from './home-carousel/home-carousel.component';
import { HomeFeaturedItems } from './featured-items/home-featured-items.component';
import { Footer } from './footer/footer.component';
import { HomePopularCategories } from './home-popular-categories/home-popular-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostList,
    HeaderComponent,
    HomeSearchBar,
    HomeCarousel,
    HomeFeaturedItems,
    Footer,
    HomePopularCategories
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    NgbModule,
    MatGridListModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
