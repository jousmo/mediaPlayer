'use strict'

import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

/* eslint-disable no-new */
new MediaPlayer({
  video: document.querySelector('video'),
  btnPlay: document.querySelector('#playButton'),
  btnMute: document.querySelector('#muteButton'),
  plugins: [new AutoPlay(), new AutoPause()]
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .catch(error => console.error(error.message))
}
