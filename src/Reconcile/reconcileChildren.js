import data from "../data/data"

export default function reconcileChildren(wipFiber, elements) {
    let index = 0
    let oldFiber = wipFiber.alternate && wipFiber.alternate.child
    let prevSibling = null

    while (index < elements.length || oldFiber != null) {
        const element = elements[index]
        let newFiber = null

        const sameType = oldFiber && element && element.type == oldFiber.type

        if (sameType) {
            newFiber = {
                type: oldFiber.type,
                subs: element.subs,
                dom: oldFiber.dom,
                parent: wipFiber,
                events: [],
                alternate: oldFiber,
                effectTag: "UPDATE",
            }
        }
        if (element && !sameType) {
            newFiber = {
                type: element.type,
                subs: element.subs,
                events: [],
                dom: null,
                parent: wipFiber,
                alternate: null,
                effectTag: "PLACEMENT",
            }
        }
        
        if (oldFiber && !sameType) {
            oldFiber.effectTag = "DELETION"
            data.deletions.push(oldFiber)
        }
        
        if (oldFiber) {
            oldFiber = oldFiber.sibling
        }
        
        if (index === 0) {
            wipFiber.child = newFiber
        } else if (element) {
            prevSibling.sibling = newFiber
        }
    
        prevSibling = newFiber
        index++
    }
}