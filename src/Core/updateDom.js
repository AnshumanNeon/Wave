import Draw from "./Draw"

const isEvent = key => key.startsWith("on")
const isProperty = key => key !== "children" && !isEvent(key)
const isNew = (prev, next) => key => prev[key] !== next[key]
const isGone = (prev, next) => key => !(key in next)

export default function updateDom(dom, prevSubs, nextSubs) {
    //Remove old or changed event listeners
    Object.keys(prevSubs).filter(isEvent).filter(key =>!(key in nextSubs) ||isNew(prevSubs, nextSubs)(key)).forEach(name => {
    const eventType = name.toLowerCase().substring(2)
    
    dom.removeEventListener(eventType, prevSubs[name])
    })

    // Remove old properties
    Object.keys(prevSubs).filter(isProperty).filter(isGone(prevSubs, nextSubs)).forEach(name => {
        dom[name] = ""
    })

    // Set new or changed properties
    Object.keys(nextSubs).filter(isProperty).filter(isNew(prevSubs, nextSubs)).forEach(name => {
        dom[name] = nextSubs[name]
    })

    // Add event listeners
    Object.keys(nextSubs).filter(isEvent).filter(isNew(prevSubs, nextSubs)).forEach(name => {
        const eventType = name.toLowerCase().substring(2)
        
        dom.addEventListener(eventType, nextSubs[name])
    })
}