// src/controllers/shopify.controller.ts
import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response as ExpressResponse } from 'express'; // 更改导入名称以避免混淆
import { Logger } from '@nestjs/common';

@Controller()
export class ShopifyController {
  @Get('/')
  async handleShopifyOAuthCallback(@Query('shop') shop: string, @Res() res: any): Promise<void> { // 使用Nest.js内置的@Res装饰器，并将类型设置为any或适当类型
    Logger.log(`ShopifyController: ${shop}`);
    
    // 如果需要使用Express原生的方法，可以将res转换为ExpressResponse类型
    const expressResponse = res.res as ExpressResponse; // 注意：这里假设Nest.js的响应对象内部包含原始的Express响应对象
    
    // 然后使用expressResponse进行操作...
  }
}