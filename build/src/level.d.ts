import { Trope } from './trope';
/** Represents a single Tomb Raider level. */
export interface Level {
    name: string;
    game: TRGame;
    tropes: Trope[];
    picture: string;
}
/** Tomb Raider game version. */
export declare enum TRGame {
    tr1 = "TR1",
    tr2 = "TR2",
    tr3 = "TR3",
    tr4 = "TR4",
    tr5 = "TR5"
}
