import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './features/blog/blog-page.component';
import { CollectionPageComponent } from './features/collection/collection-page.component';
import { CommunityPageComponent } from './features/community/community-page.component';
import { DeckbuilderPageComponent } from './features/deckbuilder/deckbuilder-page.component';
import { DecksPageComponent } from './features/decks/decks-page.component';
import { HomePageComponent } from './features/home/home-page.component';
import { ProductsComponent } from './features/products/products.component.ts';
import { ProfilePageComponent } from './features/profile/profile-page.component';
import { TestPageComponent } from './features/test/test-page.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestPageComponent,
  },
  {
    path: 'community',
    component: CommunityPageComponent,
  },
  {
    path: 'decks',
    component: DecksPageComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'user',
    component: ProfilePageComponent,
  },
  {
    path: 'user/:id',
    component: ProfilePageComponent,
  },
  {
    path: 'deckbuilder/user/:userId/deck/:deckId',
    component: DeckbuilderPageComponent,
  },
  {
    path: 'deckbuilder/:id',
    component: DeckbuilderPageComponent,
  },
  {
    path: 'deckbuilder',
    component: DeckbuilderPageComponent,
  },
  {
    path: 'collection',
    component: CollectionPageComponent,
  },
  {
    path: 'blog/:id',
    component: BlogPageComponent,
  },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
