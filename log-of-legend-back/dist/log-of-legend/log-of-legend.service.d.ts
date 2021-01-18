import { championRotationsDto } from './dto/championRotations.dto';
import { summoner } from './dto/summoner.dto';
import { challengerRank } from './dto/challengerRank.doto';
export declare class LogOfLegendService {
    championRotations(): Promise<championRotationsDto[]>;
    platformData(): Promise<any>;
    challengerRank(): Promise<challengerRank>;
    summonerInfo(summonerName: string): Promise<summoner[]>;
    matchList(summonerName: string): Promise<any>;
}
