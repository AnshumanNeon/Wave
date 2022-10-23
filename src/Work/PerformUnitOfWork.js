import updateFunctionComponent from '../Reconcile/updateFunctionComponent'
import updateHostComponent from '../Reconcile/UpdateHostComponent'

export default function performUnitOfWork(fiber) {
    if(fiber.type instanceof Function) {
        updateFunctionComponent(fiber)
    }
    else {
        updateHostComponent(fiber)
    }

    if (fiber.child) {
        return fiber.child
    }
    let nextFiber = fiber
    while (nextFiber) {
        if (nextFiber.sibling) {
            return nextFiber.sibling
        }
        nextFiber = nextFiber.parent
    }
}