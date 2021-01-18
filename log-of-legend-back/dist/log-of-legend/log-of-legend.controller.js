"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogOfLegendController = void 0;
const common_1 = require("@nestjs/common");
const log_of_legend_service_1 = require("./log-of-legend.service");
let LogOfLegendController = class LogOfLegendController {
    constructor(logOfLegnedService) {
        this.logOfLegnedService = logOfLegnedService;
    }
    championRotations() {
        return this.logOfLegnedService.championRotations();
    }
    platformData() {
        return this.logOfLegnedService.platformData();
    }
    summonerInfo(summonerName) {
        console.log(summonerName);
        return this.logOfLegnedService.summonerInfo(encodeURI(summonerName));
    }
    challengerRank() {
        return this.logOfLegnedService.challengerRank();
    }
    matchList(accountId) {
        return this.logOfLegnedService.matchList(accountId);
    }
};
__decorate([
    common_1.Get('champion-rotations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LogOfLegendController.prototype, "championRotations", null);
__decorate([
    common_1.Get('platform-data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LogOfLegendController.prototype, "platformData", null);
__decorate([
    common_1.Get('summoner-info'),
    __param(0, common_1.Query('summonerName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LogOfLegendController.prototype, "summonerInfo", null);
__decorate([
    common_1.Get('challenger-rank'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LogOfLegendController.prototype, "challengerRank", null);
__decorate([
    common_1.Get('matchList'),
    __param(0, common_1.Query('accountId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LogOfLegendController.prototype, "matchList", null);
LogOfLegendController = __decorate([
    common_1.Controller('log-of-legend'),
    __metadata("design:paramtypes", [log_of_legend_service_1.LogOfLegendService])
], LogOfLegendController);
exports.LogOfLegendController = LogOfLegendController;
//# sourceMappingURL=log-of-legend.controller.js.map