import { LogOfLegendService } from './log-of-legend.service';
import { championRotationsDto } from './dto/championRotations.dto';
import { platformData } from './dto/platformData.dto';
import { summoner } from './dto/summoner.dto';
import { challengerRank } from './dto/challengerRank.doto';
export declare class LogOfLegendController {
    private readonly logOfLegnedService;
    constructor(logOfLegnedService: LogOfLegendService);
    championRotations(): Promise<championRotationsDto[]>;
    platformData(): Promise<platformData>;
    summonerInfo(summonerName: string): Promise<summoner[]>;
    challengerRank(): Promise<challengerRank>;
    matchList(summonerName: string): Promise<any>;
}
