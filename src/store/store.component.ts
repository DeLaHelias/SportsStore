import { Component } from "@angular/core";
import { Product } from "src/model/product.model";
import { ProductRepository } from "src/model/product.repository";

@Component({
    selector: "store",
    templateUrl: "store.component.html",
})
export class StoreComponent {
    
    constructor(
        private repository: ProductRepository,
    ) {}

    get products(): Product[] {
        return this.repository.getProducts();
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }
}