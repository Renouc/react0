import { HostRoot } from "./ReactWorkTags";
import { NoFlags } from "./ReactFiberFlags";

/**
 *
 * @param {*} tag fiber 的类型，函数组件0、类组件1、原生组件5、根组件3
 * @param {*} pendingProps 等待生效的props，等待处理或生效的属性
 * @param {*} key 唯一标识
 */
function FiberNode(tag, pendingProps, key) {
  this.tag = tag;
  this.key = key;
  this.type = null; // fiber 类型，来自于 虚拟DOM节点的type
  this.stateNode = null; // 由fiber对应的真实DOM节点

  this.return = null; // 指向父节点
  this.child = null; // 指向第一个字节点
  this.sibling = null; // 指向兄弟节点

  this.pendingProps = pendingProps; // 等待生效的props
  this.memoizedProps = null; // 已经生效的属性

  // 每个fiber还会有自己的状态，每一种fiber状态的类型是不一样的
  // 类组件对应的fiber 存的就是类的实例的状态，HostRoot存的就是要渲染的元素
  this.memoizedState = null;

  // 每个fiber身上可能还有更新队列
  this.updateQueue = null;

  // 副作用的标识，表示要针对此fiber节点进行何种操作
  this.flags = NoFlags;
  // 子节点对应的副作用标识
  this.subtreeFlags = NoFlags;

  // 轮替 DOM-DIFF的时候会用到
  this.alternate = null;
}

function createFiberRoot(tag, pendingProps, key) {
  return new FiberNode(tag, pendingProps, key);
}

export function createHostRootFiber() {
  return createFiberRoot(HostRoot, null, null);
}
