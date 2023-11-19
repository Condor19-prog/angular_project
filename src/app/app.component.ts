import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {IProduct} from "./models/products";
import {HttpClientModule} from "@angular/common/http";
import {ProductsService} from "./services/products.service";
import {Observable, of, tap} from "rxjs";
import {GlobalErrorComponent} from "./components/global-error/global-error.component";
import {FormsModule} from "@angular/forms";
import {FilterProductsPipe} from "./pipes/filter-products.pipe";
import {ModalComponent} from "./components/modal/modal.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";
import {ModalService} from "./services/modal.service";

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
    CreateProductComponent
  ],
  providers: [ProductsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'angular project';
  loading = false
  products$: Observable<IProduct[]> = of([])
  term = ''

  constructor(
    private productService: ProductsService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productService.getAll().pipe(tap(() => this.loading = false))
  }
}
