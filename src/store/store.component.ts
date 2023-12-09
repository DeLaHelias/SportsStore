import { Component } from "@angular/core";
import { Product } from "src/model/product.model";
import { ProductRepository } from "src/model/product.repository";

@Component({
    selector: "store",
    templateUrl: "store.component.html",
})
export class StoreComponent {
    selectedCategory: string | undefined;
    
    constructor(
        private repository: ProductRepository,
    ) {}

    get products(): Product[] {
        return this.repository.getProducts(this.selectedCategory);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }
}