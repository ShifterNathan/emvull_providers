import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import axios, { AxiosResponse } from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { mapProductData } from 'src/utils/map-product-data';
const fs = require('fs')

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) { }

  async getProductsData(productsDataSetConst): Promise<AxiosResponse | void> {

    const body = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        db_name: process.env.API_DATABASE,
        user: process.env.API_USER,
        password: process.env.API_PASSWORD,
        LanguageCode: process.env.API_LANGUAGE_CODE,
      }
    }

    const apiUrl = 'https://api.stanleystella.com/webrequest/products/get_json'

    const apiResponse = await axios.post(apiUrl, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.data).then(data => (data))
      .catch(error => console.log({ error }, 'error in the catch'));

    const jsonResponse = JSON.stringify(apiResponse, null, 2);

    fs.writeFile('src/data/response.json', jsonResponse, (error) => {
      if (error) throw new Error(error)
    });
  }

  async saveProductsData() {
    const body = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        db_name: process.env.API_DATABASE,
        user: process.env.API_USER,
        password: process.env.API_PASSWORD,
        LanguageCode: process.env.API_LANGUAGE_CODE,
      },
    };

    const apiUrl = 'https://api.stanleystella.com/webrequest/products/get_json';

    try {
      const apiResponse = await axios.post(apiUrl, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });


      const product = JSON.parse(apiResponse.data.result);
      const mappedProducts = product.map(mapProductData);

      await this.productModel.insertMany(mappedProducts);
  
  } catch (error) {
      console.error('Error in API call or processing data:', error);
    }
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

}
