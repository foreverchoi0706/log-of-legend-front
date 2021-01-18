import { championRotationsDto } from './dto/championRotations.dto';
import { platformData } from './dto/platformData.dto';
import { summoner } from './dto/summoner.dto';
import { challengerRank } from './dto/challengerRank.doto';
export declare class LogOfLegendService {
    championRotations(): Promise<championRotationsDto[]>;
    platformData(): Promise<platformData>;
    challengerRank(): Promise<challengerRank>;
    summonerInfo(summonerName: string): Promise<summoner[]>;
    matchList(accountId: number): Promise<any>;
}
