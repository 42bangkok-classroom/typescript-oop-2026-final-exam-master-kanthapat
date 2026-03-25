import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  findAll() {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const products: Product[] = JSON.parse(fileContent) as Product[];

    return {
      success: true,
      data: [...products],
      message: 'Fetched product successfully',
    };
  }
}
