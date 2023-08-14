/*
 * @Author: along
 * @Description: 模拟数据
 * @Date: 2023-08-11 16:57:25
 * @LastEditors: along
 * @LastEditTime: 2023-08-11 17:13:28
 * @FilePath: /cxy-web-tool/src/views/gpt/index.js
 */
export const data = {
  msgId: "1622326dca01426489b6f683398a79af",
  sessionId: "a17c4c6d09a5428fac07476a85fa1e9a",
  contentType: "text",
  content: [
    "以下是一个使用 Nest.js 和 Puppeteer 来创建一个将在线链接导出为 PDF 的接口服务的示例代码。\n\n首先，安装 Puppeteer 和 @nestjs/common：\n\n```bash\nnpm install puppeteer @nestjs/common\n```\n\n然后创建一个新的 Nest.js 应用程序：\n\n```bash\nnest g app link-to-pdf\ncd link-to-pdf\n```\n\n在这个应用程序中，我们将创建一个名为 `link-to-pdf.service.ts` 的服务文件和一个名为 `link-to-pdf.controller.ts` 的控制器文件。\n\n首先，创建 `link-to-pdf.service.ts` 文件并添加以下代码：\n\n```typescript\nimport { Injectable } from '@nestjs/common';\nimport * as puppeteer from 'puppeteer';\n\n@Injectable()\nexport class LinkToPdfService {\n  async generatePdf(url: string): Promise<puppeteer.Page> {\n    const browser = await puppeteer.launch();\n    const page = await browser.newPage();\n    await page.goto(url);\n    await page.waitForNavigation();\n    const pdfUrl = page.url().replace('http://', 'https://');\n    await page.emulateMedia('screen');\n    await page.pdf({\n      path: 'generated.pdf',\n      format: 'A4',\n      printBackground: true,\n      marginType: 'normal',\n      silent: true,\n    });\n    await browser.close();\n    return page;\n  }\n}\n```\n\n这个服务使用 Puppeteer 来生成 PDF，并将页面内容导出到指定的路径。它还将 URL 替换为 https://，以确保页面能够正确加载。\n\n接下来，创建 `link-to-pdf.controller.ts` 文件并添加以下代码：\n\n```typescript\nimport { Controller, Get } from '@nestjs/common';\nimport { LinkToPdfService } from './link-to-pdf.service';\n\n@Controller('link-to-pdf')\nexport class LinkToPdfController {\n  constructor(private readonly linkToPdfService: LinkToPdfService) {}\n\n  @Get()\n  async generatePdf() {\n    const url = 'https://www.example.com/';\n    const page = await this.linkToPdfService.generatePdf(url);\n    return {\n      url,\n      pdfUrl: page.url(),\n    };\n  }\n}\n```\n\n这个控制器将接受一个 URL 请求，并调用 `generatePdf` 方法来生成 PDF。它还将 URL 和生成的 PDF URL 作为响应返回。\n\n最后，启动 Nest.js 应用程序并使用 Postman 或类似的工具发送一个 GET 请求到 `http://localhost:3000/link-to-pdf`。你将会得到一个包含 URL 和生成的 PDF URL 的 JSON 响应。\n\n你也可以使用类似以下的命令来测试生成的 PDF 文件是否正确：\n\n```bash\nopen generated.pdf\n```\n\n希望这可以帮助你实现你的需求。",
  ],
  stopReason: "stop",
};
