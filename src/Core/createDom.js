import updateDom from "./updateDom";

export default function createDom(fiber) {
    const dom = fiber.type === "TEXT_ELEM" ? document.createTextNode("") : document.createElement(fiber.type);
    
    updateDom(dom, {}, fiber.subs)

    return dom
}