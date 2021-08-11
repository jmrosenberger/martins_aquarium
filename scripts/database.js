const database = {
    fish: [
        {
            id: 1,
            image: "https://i.imgur.com/6oRthod.jpg",
            name: "Bart",
            species: "uknown", 
            length: 3,
            location: "South Pacific",
            food: "crustaceans"
        },
        {
            id: 2,
            image: "https://www.thesprucepets.com/thmb/UUUvXw56NAyxOrozsfXZxYpMv80=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/15558524002_5cabf5f088_o-f5fc9c840e4248598379c04e9fa38a1a.png",
            name: "Roger - Colin's Angelfish",
            species: "Paracentropyge colini", 
            length: 3.2,
            location: "South Pacific",
            food: "macro-algae"
        },
        {
            id: 3,
            image: "https://www.thesprucepets.com/thmb/lr57i_0aHe5tSOpEQdITKtIkXQ4=/2125x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-490648061-1b6d152ce4b84704b095b0650fa7fbd6.jpg",
            name: "Frank - Flashlight Fish",
            species: "Anomalops katoptron", 
            length: 5,
            location: "The ocean at night",
            food: "zooplankton"
        },
        {
            id: 4,
            image: "https://www.thesprucepets.com/thmb/gPmvehc2pqfUzXlIo1NiP6kZj9g=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-596177132-11d1a92b8900492fb70edc5f397abaf5.jpg",
            name: "Henry - Yellow Multibanded Pipefish",
            species: "Doryhamphus pessuliferus", 
            length: 6.8,
            location: "Can't remember",
            food: "unknown"
        },
        {
            id: 5,
            image: "https://www.thesprucepets.com/thmb/BHjxjp30MTO2j2y_u16Ik1HL1Mk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1163343746-8448703ee2e046ef9e10278415b35e42.jpg",
            name: "Angel - Peppermint Angelfish",
            species: "Paracentropyge boylei", 
            length: 1.8,
            location: "The ocean",
            food: "plankton"
        }
    ]
}



export const getFish = () => {
    return database.fish.map((fish) => ({...fish}))
}