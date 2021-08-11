import { getFish } from "./database.js"


const allFish = getFish()

for (const fish of allFish) {
    return `<ul>
    console.log(fish)
    </ul>`
}

const container = document.querySelector("#container")


export const renderAllHTML = () => {
    container.innerHTML = DailyJournal()
}
renderAllHTML()

