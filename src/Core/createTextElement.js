export default function createTextElement(text) {
    return {
        type: "TEXT_ELEM",
        subs: {
            nodeValue: text,
            children: [],
        }
    }
}