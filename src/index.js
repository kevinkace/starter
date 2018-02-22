import m from "mithril";

import css from "./index.css";

import "minireset.css";

m.mount(document.getElementById("mount"), {
    view : () =>
        m("div", { class : css.component }, "component")
});
