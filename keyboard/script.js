const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: true
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        this.elements.textArrea = document.createElement('textarea');
        this.elements.textArrea.classList.add("keyboard-in");
        this.elements.textArrea.setAttribute("autofocus", 'autofocus');
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        this.elements.main.classList.add("keyboard", "keyboard--hidden");

        let virtual = document.createElement('p');
        virtual.classList.add('virtual-key')
        virtual.innerHTML = 'Виртуальная клавиатура создана на Windows <br> <a class="text-pull" href="" target="_blank">Ссылка на PullReq</a> ';

        document.body.append(virtual);


        this.elements.main.classList.add("keyboard", "keyboard");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.append(this.createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        this.elements.main.append(this.elements.keysContainer);
        document.body.append(this.elements.textArrea);
        document.body.append(this.elements.main);

        document.querySelectorAll(".keyboard-in").forEach((el) => {

            el.addEventListener("focus", () => {
                this.open(el.value, currentValue => {
                    el.value = currentValue;
                });
            });
        });
    },

    createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\",
            "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
            "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "up", "shift-r",
            "ctrl", "win", "alt", "space", "alt-r", "left", "down", "right", "ctrl-r",
        ];
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {

            const keyElement = document.createElement("div");
            const insertLineBreak = ["backspace", "/", "enter", "shift-r"].indexOf(key) !== -1;

            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "win":
                    keyElement.classList.add("left", "key-color");
                    keyElement.innerHTML = "Win"
                    keyElement.addEventListener("click", () => {

                    });

                    break;

                case "left":
                    keyElement.classList.add("left", "key-color");
                    keyElement.innerHTML = createIconHTML("left");
                    keyElement.addEventListener("click", () => {

                    });

                    break;

                case "up":
                    keyElement.classList.add("up", "key-color");
                    keyElement.innerHTML = createIconHTML("up");


                    break;
                case "right":
                    keyElement.classList.add("right", "key-color");
                    keyElement.innerHTML = createIconHTML("right");
                    keyElement.addEventListener("click", () => {

                    });

                    break;

                case "down":
                    keyElement.classList.add("down", "key-color");
                    keyElement.innerHTML = createIconHTML("down");
                    keyElement.addEventListener("click", () => {

                    });

                    break;

                case "ctrl":
                    keyElement.classList.add("ctrl", "key-color");
                    keyElement.innerHTML = "Ctrl";
                    keyElement.addEventListener("click", () => {

                    });

                    break;

                case "alt":
                    keyElement.classList.add("alt", "key-color");
                    keyElement.innerHTML = "Alt";
                    keyElement.addEventListener("click", () => {

                    });

                    break;

                case "alt-r":
                    keyElement.classList.add("alt", "key-color");
                    keyElement.innerHTML = "Alt";
                    keyElement.addEventListener("click", () => {

                    });

                    break;

                case "ctrl-r":
                    keyElement.classList.add("alt", "key-color");
                    keyElement.innerHTML = "Ctrl";
                    keyElement.addEventListener("click", () => {

                    });

                    break;

                case "tab":
                    keyElement.classList.add("tab", "key-color");
                    keyElement.style.width = '6.5em';
                    keyElement.innerHTML = createIconHTML("tab");
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "    ";
                        this.triggerEvent("oninput");
                    });

                    break;

                case "backspace":
                    keyElement.classList.add("keyboard__key--wide", "key-color");
                    keyElement.style.width = '6.5em';
                    keyElement.style.maxWidth = '7em';
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this.triggerEvent("oninput");
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable", 'caps', "key-color");
                    keyElement.style.width = '6.9em';
                    keyElement.innerHTML = createIconHTML("capslock");

                    keyElement.addEventListener("click", () => {
                        this.toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                        if (keyElement) {
                            // let eng = [].concat(keyLayoutEng)
                            let words = document.querySelectorAll(".keyboard__key")
                            for (let i = 0; i < words.length; i++) {
                                words[41].innerHTML = 'Shift';
                                words[53].innerHTML = 'Shift';
                                words[54].innerHTML = 'Ctrl';
                                words[55].innerHTML = 'Win';
                                words[56].innerHTML = 'Alt';
                                words[58].innerHTML = 'Alt';
                                words[62].innerHTML = 'Ctrl';
                            }
                        }
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide", "key-color");
                    keyElement.innerHTML = createIconHTML("enter");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this.triggerEvent("oninput");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide", "key-color");
                    keyElement.innerHTML = createIconHTML("");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this.triggerEvent("oninput");
                    });

                    break;

                case "shift":
                    keyElement.classList.add("shift", "key-color");
                    keyElement.style.width = '6.4em';
                    keyElement.style.maxWidth = '7em';
                    keyElement.innerHTML = 'Shift';

                    keyElement.addEventListener("mousedown", () => {
                        this.toggleShift();
                        if (keyLayout) {
                            // let eng = [].concat(keyLayoutEng)
                            let words = document.querySelectorAll(".keyboard__key")
                            for (let i = 0; i < words.length; i++) {

                                keyElement.innerHTML = 'Shift';

                                words[1].innerHTML = "!";
                                words[2].innerHTML = '"';
                                words[3].innerHTML = "№";
                                words[4].innerHTML = ";";
                                words[5].innerHTML = "%";
                                words[6].innerHTML = ":";
                                words[7].innerHTML = "?";
                                words[8].innerHTML = "*";
                                words[9].innerHTML = "(";
                                words[10].innerHTML = ")";
                                words[11].innerHTML = "_";
                                words[12].innerHTML = "+";
                                words[27].innerHTML = '/';
                                words[53].innerHTML = 'Shift';
                                words[54].innerHTML = 'Ctrl';
                                words[55].innerHTML = 'Win';
                                words[56].innerHTML = 'Alt';
                                words[58].innerHTML = 'Alt';
                                words[62].innerHTML = 'Ctrl';
                            }
                        }
                    });
                    keyElement.addEventListener("mouseup", () => {
                        this.toggleShift();
                        keyElement.innerHTML = 'Shift';
                        let words = document.querySelectorAll(".keyboard__key")
                        for (let i = 0; i < words.length; i++) {
                            words[1].innerHTML = "1";
                            words[2].innerHTML = '2';
                            words[3].innerHTML = "3";
                            words[4].innerHTML = "4";
                            words[5].innerHTML = "5";
                            words[6].innerHTML = "6";
                            words[7].innerHTML = "7";
                            words[8].innerHTML = "8";
                            words[9].innerHTML = "9";
                            words[10].innerHTML = "0";
                            words[11].innerHTML = "-";
                            words[12].innerHTML = "=";
                            words[27].innerHTML = '/';
                            words[53].innerHTML = 'Shift';
                            words[54].innerHTML = 'Ctrl';
                            words[55].innerHTML = 'Win';
                            words[56].innerHTML = 'Alt';
                            words[58].innerHTML = 'Alt';
                            words[62].innerHTML = 'Ctrl';

                        }
                    });

                    break;

                case "shift-r":
                    keyElement.classList.add("shift-r", "key-color");
                    keyElement.style.width = '7.1em';
                    keyElement.style.maxWidth = '9em';
                    keyElement.innerHTML = 'Shift';

                    keyElement.addEventListener("mousedown", () => {
                        this.toggleShift();
                        if (keyLayout) {
                            // let eng = [].concat(keyLayoutEng)
                            let words = document.querySelectorAll(".keyboard__key")
                            for (let i = 0; i < words.length; i++) {

                                keyElement.innerHTML = 'Shift';
                                words[1].innerHTML = "!";
                                words[2].innerHTML = '"';
                                words[3].innerHTML = "№";
                                words[4].innerHTML = ";";
                                words[5].innerHTML = "%";
                                words[6].innerHTML = ":";
                                words[7].innerHTML = "?";
                                words[8].innerHTML = "*";
                                words[9].innerHTML = "(";
                                words[10].innerHTML = ")";
                                words[11].innerHTML = "_";
                                words[12].innerHTML = "+";
                                words[27].innerHTML = '/';
                                words[41].innerHTML = 'Shift';
                                words[54].innerHTML = 'Ctrl';
                                words[55].innerHTML = 'Win';
                                words[56].innerHTML = 'Alt';
                                words[58].innerHTML = 'Alt';
                                words[62].innerHTML = 'Ctrl';
                            }
                        }
                    });
                    keyElement.addEventListener("mouseup", () => {
                        this.toggleShift();
                        keyElement.innerHTML = 'Shift';
                        let words = document.querySelectorAll(".keyboard__key")
                        for (let i = 0; i < words.length; i++) {
                            words[1].innerHTML = "1";
                            words[2].innerHTML = '2';
                            words[3].innerHTML = "3";
                            words[4].innerHTML = "4";
                            words[5].innerHTML = "5";
                            words[6].innerHTML = "6";
                            words[7].innerHTML = "7";
                            words[8].innerHTML = "8";
                            words[9].innerHTML = "9";
                            words[10].innerHTML = "0";
                            words[11].innerHTML = "-";
                            words[12].innerHTML = "=";
                            words[27].innerHTML = '\\';
                            words[41].innerHTML = 'Shift';
                            words[54].innerHTML = 'Ctrl';
                            words[55].innerHTML = 'Win';
                            words[56].innerHTML = 'Alt';
                            words[58].innerHTML = 'Alt';
                            words[62].innerHTML = 'Ctrl';


                        }
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this.triggerEvent("oninput");

                    });

                    break;
            }

            fragment.append(keyElement);

            if (insertLineBreak) {
                fragment.append(document.createElement("br"));
            }


        });

        return fragment;
    },

    triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        for (const key of this.elements.keys) {

            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },
    toggleShift() {
        this.properties.changeLang = !this.properties.changeLang;
        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.changeLang ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },
    open(initialValue, oninput) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
    },
};




document.onclick = function () {
    document.querySelector(".keyboard-in").focus();
};


window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});