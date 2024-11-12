function initializeUpdateQueue(fiber) {
  // 创建一个新的更新队列
  // pending 是一个循环链表
  const queue = {
    shared: {
      pending: null,
    },
  };

  fiber.updateQueue = queue;
}

function createUpdate() {
  return {};
}

function enqueueUpdate(fiber, update) {
  const updateQueue = fiber.updateQueue;
  const shared = updateQueue.shared;
  const pending = shared.pending;
  if (pending === null) {
    // pending 是一个循环链表
    update.next = update;
  } else {
    update.next = pending.next;
    pending.next = update;
  }
  update.shared.pending = update;
}

let fiber = {
  memoizedState: { id: 1 },
};

initializeUpdateQueue(fiber);

let update1 = createUpdate();
update1.payload = { name: "张三" };

enqueueUpdate(fiber, update1);
