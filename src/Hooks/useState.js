import data from "../data/data";

export default function useState(initialValue) {
    const oldHook = data.wipFiber.alternate && data.wipFiber.alternate.hooks && data.wipFiber.alternate.hooks[data.hookIndex]

    const hook = {
        state: oldHook ? oldHook.state : initialValue,
        queue: []
    }

    const actions = oldHook ? oldHook.queue : []

    if(actions.length > 0)
    {
        actions.forEach(action => {
            hook.state = action(hook.state)
        })
    }

    const setState = action => {
        hook.queue.push(action)
        data.wipRoot = {
          dom: data.currentRoot.dom,
          subs: data.currentRoot.subs,
          alternate: data.currentRoot,
        }
        data.nextUnitOfWork = data.wipRoot
        data.deletions = []
    }

    data.wipFiber.hooks.push(hook)
    data.hookIndex++
    return [hook.state, setState]
}