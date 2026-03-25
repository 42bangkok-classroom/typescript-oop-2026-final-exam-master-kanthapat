import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Product } from './product.interface';
import { ApiResponse } from 'src/interfaces/response.interface';

@Injectable()
export class ProductService {
  findAll(): ApiResponse<Product[]> {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const products: Product[] = JSON.parse(fileContent) as Product[];
    console.log([...products]);
    return {
      success: true,
      data: [...products],
      message: 'Fetched product successfully',
    };
  }
}
