import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./components/layout/layout.component";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LayoutComponent, HeaderComponent]
})
export class UiModule {}
