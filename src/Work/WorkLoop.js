import data from '../data/data'
import commitRoot from './commitRoot';
import performUnitOfWork from './PerformUnitOfWork';

export default function WorkLoop(deadline) {
    let shouldYield = false;

    while(data.nextUnitOfWork && !shouldYield) {
        data.nextUnitOfWork = performUnitOfWork(data.nextUnitOfWork)

        shouldYield = deadline.timeRemaining() < 1
    }

    if(!data.nextUnitOfWork && data.wipRoot) {
        commitRoot()
    }

    window.requestIdleCallback(WorkLoop)
}