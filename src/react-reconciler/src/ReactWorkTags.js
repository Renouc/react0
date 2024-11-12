// 每中虚拟DOM都会对应自己的fiber tag类型

export const HostRoot = 3; // Root of a host tree. Could be nested inside another node.
export const FunctionComponent = 0;
export const ClassComponent = 1;
export const HostPortal = 4; // A subtree. Could be an entry point to a different renderer.
export const HostComponent = 5;
export const HostText = 6;
export const Fragment = 7;
export const Mode = 8;
