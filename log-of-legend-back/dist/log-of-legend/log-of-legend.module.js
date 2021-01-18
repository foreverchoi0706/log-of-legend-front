"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogOfLegendModule = void 0;
const common_1 = require("@nestjs/common");
const log_of_legend_service_1 = require("./log-of-legend.service");
const log_of_legend_controller_1 = require("./log-of-legend.controller");
let LogOfLegendModule = class LogOfLegendModule {
};
LogOfLegendModule = __decorate([
    common_1.Module({
        providers: [log_of_legend_service_1.LogOfLegendService],
        controllers: [log_of_legend_controller_1.LogOfLegendController]
    })
], LogOfLegendModule);
exports.LogOfLegendModule = LogOfLegendModule;
//# sourceMappingURL=log-of-legend.module.js.map