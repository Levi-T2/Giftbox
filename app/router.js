import { AboutController } from "./controllers/AboutController.js";
import { GifController } from "./controllers/GifController.js";
import { GiftSandboxController } from "./controllers/GiftSandboxController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: [GiftSandboxController, GifController],
    view: null
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]





