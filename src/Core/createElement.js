import createTextElement from "./createTextElement";

export default function createElement(type, subs, ...children) {
    return {
        type: type,
        subs: {
            ...subs,
            children: children.map(child => typeof child === "object" ? child : createTextElement(child))
        }
    }
}
