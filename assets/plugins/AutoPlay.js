'use strict'

class AutoPlay {
  run (player) {
    if (!player.muted) {
      player.muted = true
    }
    player.togglePlay()
  }
}

export default AutoPlay
