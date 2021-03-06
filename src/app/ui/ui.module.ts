import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./components/layout/layout.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class UiModule {}
