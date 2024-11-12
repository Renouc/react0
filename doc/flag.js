// &	与	两个位都为1时，结果才为1
// |	或	两个位都为0时，结果才为0

// 在React进行DOM DIFF的时候会计算要执行的操作

const Placement = 0b0001; // 1
const Update = 0b0010; // 2

let flags = 0b00;

// 增加操作
flags |= Placement; // 0b00 | 0b0001 = 0b0001 十进制 1
console.log(flags.toString(2));
flags |= Update; // 0b0001 | 0b0010 = 0b0011 十进制 3
console.log(flags.toString(2));

// 删除操作
flags &= ~Placement; // / 0b0011 & 0b1110 = 0b0010 十进制 2
console.log(flags.toString(2));

// 判断是否包含
console.log((flags & Placement) === Placement); // false
console.log((flags & Update) === Update); // true 0b0010 & 0b0010 = 0b0010

console.log((flags & Placement) === 0); // true
console.log((flags & Update) === 0); // false
