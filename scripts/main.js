import { FishList } from "./FishList.js"





const parentHTMLElement = document.querySelector("#container")

export const renderAllHTML = () => {
    parentHTMLElement.innerHTML = FishList()

}

renderAllHTML()

