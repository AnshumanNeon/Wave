import data from '../data/data'
import WorkLoop from '../Work/WorkLoop'

export default function Draw(element, container) {
    data.wipRoot = {
        dom: container,
        subs: {
            children: [element]
        },
        alternate: data.currentRoot,
    }

    data.deletions = []
    data.subscriptions = []
    data.nextUnitOfWork = data.wipRoot

    requestIdleCallback(WorkLoop)
}
