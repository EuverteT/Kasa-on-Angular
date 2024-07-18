export interface Location {
    id: number;
    title: string;
    cover: string;
    pictures: Array<string>;
    description: string;
    host: Host;
    rating: number;
    location: string;
    equipments: Array<string>;
    tags: Array<string>;

}

export interface Host {
    name: string;
    picture: string;
}