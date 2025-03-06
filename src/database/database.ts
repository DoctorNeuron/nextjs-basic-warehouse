import { ProductModel } from "@/interface/products";
import { readFile } from "fs/promises";

// Yes, we can just use Products.ts
// Tapi ini mau kasih demo saja kl ini adalah server-side operations.
export async function GetProduct({ category = "", sort = "", limit = 0 }: { category?: string, sort?: string, limit?: number }) {
  let product: ProductModel[] = JSON.parse(await readFile(`${process.cwd()}/src/database/products.json`, 'utf-8'));

  if (category.length > 0) product = product.filter(x => x.category.toLowerCase() === category.toLowerCase());
  if (sort.length > 0 && sort === 'price-asc') product = product.sort((a, b) => a.price - b.price);
  else if (sort.length > 0 && sort === 'price-desc') product = product.sort((a, b) => b.price - a.price);
  if (limit > 0) product = product.slice(0, limit);

  return product;
}

export async function GetTop5Products(){
  const product: ProductModel[] = JSON.parse(await readFile(`${process.cwd()}/src/database/products.json`, 'utf-8'));
  return product.sort((a, b) => b.price - a.price).slice(0, 5);
}

export async function GetProductByID(id: string){
  const product: ProductModel[] = JSON.parse(await readFile(`${process.cwd()}/src/database/products.json`, 'utf-8'));
  return product.find(x => x.id === id) ?? null;
}

export async function GetCountProduct() {
  const product: ProductModel[] = JSON.parse(await readFile(`${process.cwd()}/src/database/products.json`, 'utf-8'));
  return product.length;
}

export async function GetCountProductByCategory() {
  const product: ProductModel[] = JSON.parse(await readFile(`${process.cwd()}/src/database/products.json`, 'utf-8'));
  
  return product.reduce((acc, curr) => {
    if (!acc[curr.category]) acc[curr.category] = 1;
    else acc[curr.category] += 1;

    return acc;
  }, {} as { [key: string]: number });
}