import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";

const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};

function hasValidKey(config) {
  return config.key !== undefined;
}

function hasValidRef(config) {
  return config.ref !== undefined;
}

function ReactElement(type, key, ref, props) {
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type, // 标签名
    key, // 虚拟DOM的key，唯一标识
    ref, // 引入，后面可以通过这实现获取真实DOM的需求
    props, // 属性对象
  };
}

export function jsxDEV(type, config) {
  console.log("config:", config);

  let propName; // 属性名
  const props = {}; // 属性对象
  let key = null; // 每个虚拟DOM可以有一个可选的key属性，用来区分一个父节点下的不同子节点
  let ref = null; // 引入，后面可以通过这实现获取真实DOM的需求

  if (hasValidKey(config)) {
    key = config.key;
  }

  if (hasValidRef(config)) {
    ref = config.ref;
  }

  for (propName in config) {
    if (
      Object.prototype.hasOwnProperty.call(config, propName) && // 判断是否是自身属性 config.hasOwnProperty(propName) 为什么不用这个，因为config可能为 null
      !RESERVED_PROPS.hasOwnProperty(propName)
    ) {
      props[propName] = config[propName];
    }
  }

  return ReactElement(type, key, ref, props);
}
