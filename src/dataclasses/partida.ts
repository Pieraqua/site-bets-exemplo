export class Partida{
    campeonato: string;
    tempo_partida : string;
    time_1: string;
    time_1_icon: string;
    time_1_pontos: number;
    time_2: string;
    time_2_icon: string;
    time_2_pontos: number;
    odds1: number;
    odds2: number;
    oddsEmpate: number;
    statusPartida: boolean;

    constructor(
        {campeonato, tempo_partida, time_1, time_1_icon, time_1_pontos, time_2, time_2_icon, time_2_pontos, odds1, odds2, oddsEmpate, statusPartida} :
        {campeonato : string, tempo_partida : string, time_1 : string, time_1_icon : string, time_1_pontos : number, time_2 : string, time_2_icon : string, 
            time_2_pontos : number, odds1 : number, odds2 : number, oddsEmpate : number, statusPartida : boolean}
    ) {
        this.campeonato = campeonato;
        this.tempo_partida = tempo_partida; 
        this.time_1 = time_1;
        this.time_1_icon = time_1_icon;
        this.time_1_pontos = time_1_pontos;
        this.time_2 = time_2;
        this.time_2_icon = time_2_icon;
        this.time_2_pontos = time_2_pontos;
        this.odds1 = odds1;
        this.odds2 = odds2;
        this.oddsEmpate = oddsEmpate;
        this.statusPartida = statusPartida;
    }

}