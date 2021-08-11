import { getFish } from "./database.js"





export const FishList = () => {
    const fishes = getFish()

    let htmlString = `<article class="fishList">`

    for (const fish of fishes) {
        htmlString += `<section class="fish card">
            <div><img class="fish__image image--card" src=${fish.image} style="width:100%"/></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
    `
    }
    htmlString += `</article>`

    return htmlString

}







     
// `<article class="quotes">
//     <h4>Quotes For The Wayward Traveler</h4>
//         <p>"Sharks love being petted..."
//         </p>
//         <p>"Oxygen is overrated..."</p>
//         <p>"Don't litter..."</p>

// </article>
// <section class="places">
// <h4>Places Vistited to Harvest Fish</h4>
//     <ul>
//         <li>Location #1</li>
//         <li>Location #2</li>
//         <li>Location #3</li>
//         <li>Location #4</li>
//     </ul>
// </section> `