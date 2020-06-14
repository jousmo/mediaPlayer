'use strict'

class MediaPlayer {
  constructor ({ video, btnPlay, btnMute, plugins = [] }) {
    this.video = video
    this.btnplay = btnPlay
    this.btnMute = btnMute
    this.plugins = plugins
    this.togglePlay = this.togglePlay.bind(this)
    this.toggleMute = this.toggleMute.bind(this)
    this.listeners()
    this.initPlugins()
  }

  listeners () {
    this.btnplay.addEventListener('click', this.togglePlay)
    this.btnMute.addEventListener('click', this.toggleMute)
  }

  initPlugins () {
    const player = {
      video: this.video,
      togglePlay: () => this.togglePlay(),
      play: () => this.play(),
      pause: () => this.pause(),
      get muted () {
        return this.video.muted
      },
      set muted (value) {
        this.video.muted = value
      }
    }

    this.plugins.forEach(plugin => plugin.run(player))
  }

  play () {
    this.video.play()
  }

  pause () {
    this.video.pause()
  }

  toggleMute () {
    this.video.muted = !this.video.muted
  }

  togglePlay () {
    this.video.paused ? this.video.play() : this.video.pause()
  }
}

export default MediaPlayer
