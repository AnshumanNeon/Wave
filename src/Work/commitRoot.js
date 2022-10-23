import data from "../data/data";
import commitWork from "./commitWork";

export default function commitRoot() {
    data.deletions.forEach(commitWork)
    data.subscriptions.forEach(fn => {
        fn()
    })
    commitWork(data.wipRoot.child)
    data.currentRoot = data.wipRoot
    data.wipRoot = null;
}