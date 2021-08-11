import { getFish } from "./database.js"





export const FishList = () => {
    const fishes = getFish()

    const htmlString = `article class="fishList">`

    for (const fish of fishes) {
        htmlString += `<section class="fish card">
            <div><img class="fish__image image--card" src="${fish.image}" /></div>
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







    `  <section class="inventory">
<h2>Current Inventory</h2>
<div class="card" id="firstFish">
    <img src="https://www.thesprucepets.com/thmb/UUUvXw56NAyxOrozsfXZxYpMv80=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/15558524002_5cabf5f088_o-f5fc9c840e4248598379c04e9fa38a1a.png" alt="colin's angelfish" style="width:100%">
    <div class="container">
      <h4><b>Colin's Angelfish</b></h4>
      <!-- <p>Species: Paracentropyge colini</p>
      <p>Length: 3.2 inches</p>
      <p>Name: "Roger"</p>
      <p>Harvest Location: South Pacific</p>
      <p>What it eats: macro-algae</p> -->
    </div>
  </div>
  <div class="card" id="secondFish">
    <img src="https://www.thesprucepets.com/thmb/lr57i_0aHe5tSOpEQdITKtIkXQ4=/2125x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-490648061-1b6d152ce4b84704b095b0650fa7fbd6.jpg" alt="flashligh fish" style="width:100%">
    <div class="container">
      <h4><b>Flashlight Fish</b></h4>
      <!-- <p>Species: Anomalops katoptron</p>
      <p>Length: 5 inches</p>
      <p>Name: "Frank"</p>
      <p>Harvest Location: The ocean at night</p>
      <p>What it eats: zooplankton</p> -->
    </div>
  </div>
  <div class="card" id="thirdFish">
    <img src="https://www.thesprucepets.com/thmb/gPmvehc2pqfUzXlIo1NiP6kZj9g=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-596177132-11d1a92b8900492fb70edc5f397abaf5.jpg" alt="yellow multibanded pipefish" style="width:100%">
    <div class="container">
      <h4><b>Yellow Multibanded Pipefish</b></h4>
      <!-- <p>Species: Doryhamphus pessuliferus</p>
      <p>Length: 6.8 inches</p>
      <p>Name: "Henry"</p>
      <p>Harvest Location: can't remember</p>
      <p>What it eats: unknown</p> -->
    </div>
  </div>
  <div class="card" id="fourthFish">
    <img src="https://www.thesprucepets.com/thmb/BHjxjp30MTO2j2y_u16Ik1HL1Mk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1163343746-8448703ee2e046ef9e10278415b35e42.jpg" alt="peppermint angelfish" style="width:100%">
    <div class="container">
      <h4><b>Peppermint Angelfish</b></h4>
      <!-- <p>Species: Paracentropyge boylei</p>
      <p>Length: 1.8 inches</p>
      <p>Name: "Angel"</p>
      <p>Harvest Location: The ocean</p>
      <p>What it eats: plankton</p> -->
    </div>
  </div>

</section>  
<article class="quotes">
    <h4>Quotes For The Wayward Traveler</h4>
        <p>"Sharks love being petted..."
        </p>
        <p>"Oxygen is overrated..."</p>
        <p>"Don't litter..."</p>

</article>
<section class="places">
<h4>Places Vistited to Harvest Fish</h4>
    <ul>
        <li>Location #1</li>
        <li>Location #2</li>
        <li>Location #3</li>
        <li>Location #4</li>
    </ul>
</section> `