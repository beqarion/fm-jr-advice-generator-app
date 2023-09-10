export const startAnimations = () => {
  anime({
    targets: "#article",
    translateY: [-50, 0],
    opacity: [0, 1],
  })
  anime({
    targets: "#random-btn img",
    rotate: "360deg",
    easing: "easeOutBack",
  })
  anime({
    targets: "#advice",
    translateX: [150, 0],
    duration: 1000,
    opacity: [0, 1],
    easing: "easeOutBack",
  })
  anime({
    targets: "#advice-num",
    translateY: [-75, 0],
    duration: 1000,
    opacity: [0, 1],
  })
}
