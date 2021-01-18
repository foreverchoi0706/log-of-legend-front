export interface championRotationsDto {
    readonly version: string;
    readonly id: string;
    readonly key: string;
    readonly name: string;
    readonly title: string;
    readonly blurb: string;
    readonly info: {
        readonly attack: string;
        readonly defense: string;
        readonly magic: string;
        readonly difficulty: string;
    };
    readonly image: {
        readonly full: string;
        readonly sprite: string;
        readonly group: string;
        readonly x: number;
        readonly y: number;
        readonly w: number;
        readonly h: number;
    };
    readonly tags: string[];
    readonly partype: string;
    readonly stats: {
        readonly hp: number;
        readonly hpperlevel: number;
        readonly mp: number;
        readonly mpperlevel: number;
        readonly movespeed: number;
        readonly armor: number;
        readonly armorperlevel: number;
        readonly spellblock: number;
        readonly spellblockperlevel: number;
        readonly attackrange: number;
        readonly hpregen: number;
        readonly hpregenperlevel: number;
        readonly mpregen: number;
        readonly mpregenperlevel: number;
        readonly crit: number;
        readonly critperlevel: number;
        readonly attackdamage: number;
        readonly attackdamageperlevel: number;
        readonly attackspeedperlevel: number;
        readonly attackspeed: number;
    };
}
