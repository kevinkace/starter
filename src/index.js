import m from "mithril";

import css from "./index.css";

import "minireset.css";

const mount = document.getElementById("mount");
const skills = [{
    name: "skill 1",
    coolDown: false,
    coolDownDur: 4000
}];

m.mount(mount, {
    view() {
        return [
            m("button", { onclick: () => { skills[0].coolDown = true; } }, "cooldown"),
            m("button", { onclick: () => { skills[0].coolDown = false; } }, "reset"),
            m("button", {
                onclick: () => {
                    const skill = skills[0];
                    window.s = skill;

                }
            }, "buff"),
            m("div.skills", skills.map(skill =>
                m("div.skill",
                    skill.coolDown ?
                        m("div.coolDown", {
                            oncreate(cdVnode) {
                                skill.dom = cdVnode.dom;
                            },
                            style: {
                                animationDuration: `${skill.coolDownDur}ms`
                            }
                        }) :
                        null,
                    m("div.name", skill.name)
                )
            ))
        ];
    }
});
