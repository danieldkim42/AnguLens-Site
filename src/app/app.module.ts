import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AppComponent } from './app.component';
import { TopContainerComponent } from './top-container/top-container.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { TutorialContainerComponent } from './tutorial-container/tutorial-container.component';
import { TeamContainerComponent } from './team-container/team-container.component';
import { DemoItemComponent } from './demo-container/demo-item/demo-item.component';
import { TeamMemberBoxComponent } from './team-container/team-member-box/team-member-box.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopContainerComponent,
    DemoContainerComponent,
    TutorialContainerComponent,
    TeamContainerComponent,
    DemoItemComponent,
    TeamMemberBoxComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
