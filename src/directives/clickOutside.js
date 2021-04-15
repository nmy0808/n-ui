export default {
  bind(el, binding) {
    const handleChangeShow = binding.value;
    document.addEventListener('click',
      (e) => {
        if (!el.contains(e.target)) {
          handleChangeShow();
        }
      });
  },
};