export type CharacterResponse = {
    info:    Info;
    results: Character[];
}
 
export type Info = {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}
 
export type Character = {
    id:       number;
    name:     string;
    status:   'Alive' | 'Dead' | 'unknown';
    species:  'Alien' | 'Human';
    type:     string;
    gender:   'Female' | 'Male' | 'unknown'
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}
 
export type Location = {
    name: string;
    url:  string;
}