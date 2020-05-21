// 引入url
import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
const port = 5000;

// 初始化
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`服务器正在${port}端口号运行...`);

// 监听端口
await app.listen({ port });
