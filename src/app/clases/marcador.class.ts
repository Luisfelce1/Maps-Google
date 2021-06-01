
//export class Marcador {
//    constructor(public lat: number, public lng: number) { }
//}

export class Marcador {

    public lat: number;
    public lng: number;

    public title: string = 'sin titulo';
    public description: string = 'sin descripción';

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
     }
}