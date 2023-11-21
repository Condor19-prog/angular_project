import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import {ProductsService} from "./services/products.service";
import {GlobalErrorComponent} from "./components/global-error/global-error.component";
import {FormsModule} from "@angular/forms";
import {FilterProductsPipe} from "./pipes/filter-products.pipe";
import {ModalComponent} from "./components/modal/modal.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";
import {NavigationComponent} from "./components/navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProductComponent,
    HttpClientModule,
    GlobalErrorComponent,
    FormsModule,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    NavigationComponent,
  ],
  providers: [ProductsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

}
