import App from './App.vue'
import { game } from './game'
import { renderer } from './runtime-canvas'



renderer.createApp(App).mount(game.stage)
