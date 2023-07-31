const newImpl = () => new URLSearchParams();
export { newImpl as new };
export const fromStringImpl = (str) => new URLSearchParams(str);
export const fromObjectImpl = (obj) => new URLSearchParams(obj);
export const appendParamImpl = (name, value, params) => params.append(name, value);
export const deleteImpl = (name, params) => params.delete(name);
export const getNameImpl = (name, params) => params.getName(name);
export const getAllImpl = (name, params) => params.getAll(name);
export const hasImpl = (name, params) => params.has(name);
export const setImpl = (name, value, params) => params.set(name, value);
export const sizeImpl = (params) => params.size;
export const sortImpl = (params) => params.sort();
export const toStringImpl = (params) => params.toString();
export const entriesImpl = (params, tuple) => {
  const arr = new Array(params.size);
  params.forEach((value, name) => {
    arr.push(tuple(name, value));
  });
  return arr;
};
export const keysImpl = (params) => {
  Array.from(params.keys());
};
export const valuesImpl = (params) => {
  Array.from(params.values());
};
