'use stric'

class AutoPause {
  constructor () {
    this.player = null
    this.threshold = 0.25
    this.handlerIntersection = this.handlerIntersection.bind(this)
    this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    this.listeners()
  }

  listeners () {
    document.addEventListener('visibilitychange', this.handlerVisibilityChange)
  }

  run (player) {
    this.player = player
    const observer = new IntersectionObserver(this.handlerIntersection, { threshold: this.threshold })
    observer.observe(this.player.video)
  }

  handlerIntersection (entries) {
    const [entry] = entries
    const { intersectionRatio } = entry
    const isVisible = intersectionRatio >= this.threshold

    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  handlerVisibilityChange () {
    const isVisible = document.visibilityState === 'visible'

    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }
}

export default AutoPause
