export function findTestWrapper(wrapper, tag) {
  return wrapper.findAll(`[data-test="${tag}"]`);
}