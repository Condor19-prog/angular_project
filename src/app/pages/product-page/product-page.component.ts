import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {CreateProductComponent} from "../../components/create-product/create-product.component";
import {FilterProductsPipe} from "../../pipes/filter-products.pipe";
import {FormsModule} from "@angular/forms";
import {ModalComponent} from "../../components/modal/modal.component";
import {ProductComponent} from "../../components/product/product.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, CreateProductComponent, FilterProductsPipe, FormsModule, ModalComponent, ProductComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})

export class ProductPageComponent implements OnInit{
  title = 'angular project';
  loading = false
  // products$: Observable<IProduct[]> = of([])
  term = ''

  constructor(
    public productService: ProductsService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    this.productService.getAll().subscribe(() => this.loading = false)
    // this.products$ = this.productService.getAll().pipe(tap(() => this.loading = false))
  }
}
