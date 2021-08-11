const database = {
    fish: [
        {
            id: 1,
            image: ,
            name: "Bart",
            species: "uknown", 
            length: 3
            location: "South Pacific",
            food: "crustaceans",
        },
        {
            id: 2,
            image: ,
            name: "Roger",
            species: "Paracentropyge colini", 
            length: 3.2
            location: "South Pacific",
            food: "macro-algae",
        },
        {
            id: 3,
            image: ,
            name: "Frank",
            species: "Anomalops katoptron", 
            length: 5
            location: "The ocean at night",
            food: "zooplankton",
        },
        {
            id: 4,
            image: ,
            name: "Henry",
            species: "Doryhamphus pessuliferus", 
            length: 6.8
            location: "Can't remember",
            food: "unknown",
        },
        {
            id: 5,
            image: ,
            name: "Angel",
            species: "Paracentropyge boylei", 
            length: 1.8
            location: "The ocean",
            food: "plankton",
        }
    ]
}



export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}