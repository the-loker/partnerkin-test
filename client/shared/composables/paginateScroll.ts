export const usePaginateScroll = (
  elem: Ref<HTMLElement | undefined>,
  callback: () => void
) => {
  let observer: IntersectionObserver;

  const destroy = () => {
    if (observer) {
      observer.disconnect();
    }
  };

  onMounted(() => {
    if (!elem.value) return;

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elem.value);
  });

  onUnmounted(() => destroy());

  return {
    destroy,
  };
};
