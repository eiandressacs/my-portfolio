import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './pages/about/about.pages';
import { RedesComponent } from './pages/redes/redes.pages';
import { ProjectComponent } from './pages/project/project.pages';
import { HomeNavBarComponent } from './component/home-nav-bar/home-nav-bar.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeProfileComponent } from './component/home-profile/home-profile.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { RepositorioComponent } from './component/repositorio/repositorio.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AboutComponent,
    RedesComponent,
    ProjectComponent,
    HomeNavBarComponent,
    SkillsComponent,
    FooterComponent,
    HomeProfileComponent,
    ProjectsComponent,
    RepositorioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
