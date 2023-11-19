import {Component, Input} from "@angular/core";
import {IProduct} from "../../models/products";
import {CurrencyPipe, DecimalPipe, NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-product',
  templateUrl: './product.template.html',
  imports: [
    CurrencyPipe,
    NgIf,
    NgClass,
    NgStyle,
    DecimalPipe
  ],
  standalone: true
})

export class ProductComponent {
  @Input() product: IProduct | null = null
  details = false
}
