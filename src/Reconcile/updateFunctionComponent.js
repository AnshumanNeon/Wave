import data from "../data/data"
import reconcileChildren from "./reconcileChildren"

export default function updateFunctionComponent(fiber) {
    data.wipFiber = fiber
    data.hookIndex = 0
    data.wipFiber.hooks = []
    const children = [fiber.type(fiber.subs)]
    reconcileChildren(fiber, children)
}