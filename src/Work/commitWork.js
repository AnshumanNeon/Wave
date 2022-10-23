import updateDom from "../Core/updateDom";
import commitDeletion from "./commitDeletion";

export default function commitWork(fiber) {
    if (!fiber) {
        return;
    }

    let domParentFiber = fiber.parent;

    while(!domParentFiber.dom) {
        domParentFiber = domParentFiber.parent
    }
    const domParent = domParentFiber.dom;

    if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
        domParent.appendChild(fiber.dom)
    }
    else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
        updateDom(fiber.dom, fiber.alternate.subs, fiber.subs)
    }
    else if (fiber.effectTag === "DELETION") {
        commitDeletion(fiber, domParent)
    }
    
    commitWork(fiber.child)
    commitWork(fiber.sibling)
}