import createDom from '../Core/createDom'
import reconcileChildren from '../Reconcile/reconcileChildren'

export default function updateHostComponent(fiber) {
    if (!fiber.dom) {
        fiber.dom = createDom(fiber)
    }

    if(fiber.subs != null) {
        reconcileChildren(fiber, fiber.subs.children)
    }
}