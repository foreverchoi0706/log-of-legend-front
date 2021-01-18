"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require('fs');
const PORT = process.env.PORT || 443;
const httpsOptions = {
    key: fs.readFileSync(__dirname + '/secrets/key.pem'),
    cert: fs.readFileSync(__dirname + '/secrets/cert.pem'),
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions,
    });
    app.enableCors({
        origin: '*',
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    });
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map