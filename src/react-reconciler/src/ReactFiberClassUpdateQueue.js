export function initializeUpdateQueue(fiber) {
  // 创建一个新的更新队列
  // pending 是一个循环链表
  const queue = {
    shared: {
      pending: null,
    },
  };

  fiber.updateQueue = queue;
}
