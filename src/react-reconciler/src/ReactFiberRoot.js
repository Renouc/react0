import { createHostRootFiber } from "./ReactFiber";
import { initializeUpdateQueue } from "./ReactFiberClassUpdateQueue";
function FiberRootNode(containerInfo) {
  this.containerInfo = containerInfo;
}

export function createFiberRoot(containerInfo) {
  const root = new FiberRootNode(containerInfo);

  // HostRootFiber 指的就是根节点div#root
  const uninitializedFiber = createHostRootFiber();
  // 根容器的current指向当前的根fiber
  root.current = uninitializedFiber;
  // 根fiber的stateNode，也就是真实DOM节点指向FiberRootNode
  uninitializedFiber.stateNode = root;
  // 初始化更新队列
  initializeUpdateQueue(uninitializedFiber);

  return root;
}
