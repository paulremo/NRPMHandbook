window.onload = function () {
    WIDTH = 105;
    HEIGHT = 30;

    SPACEX = 20;
    SPACEY = 20;

    class Node {
        constructor(x, y, txt, parent) {
            this.x = x;
            this.y = y;
            this.txt = txt;
            this.parent = parent;

            this.color = "brown"

            this.height = HEIGHT;
            this.width = WIDTH;
        }

        drawMe(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'white';
            ctx.font = '9px serif';
            let txt_x = this.x + (this.width - ctx.measureText(this.txt).width) / 2;
            let txt_y = this.y + 2 * HEIGHT / 3;
            ctx.fillText(this.txt, txt_x, txt_y);
        }

        isClicked(px, py) {
            if (px < this.x + this.width && px > this.x) {
                if (py < this.y + this.height && py > this.y) {
                    return true;
                }
            }
            return false;
        }
    }

    class Leaf extends Node {
        constructor(x, y, txt, parent) {
            super(x, y, txt, parent)

            this.color = "green"
        }
    }

    class DecisionTree {

        constructor(name, levels, canvas, context) {

            this.name = name;

            this.levels = levels;

            this.canvas = canvas;

            this.context = context;

            this.current_level = this.levels;

            this.choices = new Map();

            this.depth = 0;

            this.max

            this.init();

        }



        init() {

            this.current_level = this.levels;

            this.choices = new Map();

            let n = this.current_level.size;

            this.choices.set(this.depth, new Set());

            this.ypar = 20;
            let xpar;

            if (n % 2 == 0) {
                xpar = this.canvas.width / 2;
                var i = 0;
                if (this.current_level instanceof Map) {
                    for (var [key, l] of this.current_level) {
                        let xl;
                        if (i < n / 2) {
                            xl = xpar - WIDTH / 2 - (i - 1) * (SPACEX + WIDTH);
                        }
                        else {
                            xl = xpar + WIDTH / 2 + (i - n / 2 - 1) * (SPACEX + WIDTH);
                        }

                        let yl = SPACEY;
                        let new_leaf = new Node(xl, yl, key, null);
                        this.choices.get(this.depth).add(new_leaf);

                        i++;
                    }
                }

            }
            else {
                xpar = this.canvas.width / 2 - WIDTH / 2;
                var i = 0;
                if (this.current_level instanceof Map) {
                    for (var [key, l] of this.current_level) {
                        let xl;
                        if (i < Math.trunc(n / 2)) {
                            xl = xpar - i * (WIDTH + SPACEX);
                        }
                        else if (i > Math.trunc(n / 2)) {
                            xl = xpar + (i - n / 2) * (SPACEX + WIDTH);
                        }
                        else {
                            xl = xpar;
                        }
                        let yl = SPACEY;
                        let new_leaf = new Node(xl, yl, key, null);
                        this.choices.get(this.depth).add(new_leaf);

                        i++;
                    }
                }
            }

            this.drawTree()

        }

        createLeaves(parent) {

            this.current_level = this.current_level.get(parent.txt);

            this.depth += 1;

            let n = this.current_level.size;

            this.choices.set(this.depth, new Set());

            this.ypar = parent.y;
            let xpar;

            if (n % 2 == 0) {
                xpar = parent.x + WIDTH / 2;
                var i = 0;
                if (this.current_level instanceof Map) {
                    for (var [key, l] of this.current_level) {
                        let xl;
                        xl = (xpar + SPACEX / 2) + (i - n / 2) * (SPACEX + WIDTH);
                        let yl = this.ypar + HEIGHT + SPACEY;
                        let new_leaf = new Node(xl, yl, key, parent);
                        this.choices.get(this.depth).add(new_leaf);

                        i++;
                    }
                }
                else {
                    for (var item of this.current_level) {
                        let xl;
                        xl = (xpar + SPACEX / 2) + (i - n / 2) * (SPACEX + WIDTH);

                        let yl = this.ypar + HEIGHT + SPACEY;
                        let new_leaf = new Leaf(xl, yl, item, parent);
                        this.choices.get(this.depth).add(new_leaf);

                        i++;
                    }
                }

            }
            else {
                xpar = parent.x;
                var i = 0;
                if (this.current_level instanceof Map) {
                    for (var [key, l] of this.current_level) {
                        let xl;
                        xl = xpar + (i - Math.trunc(n / 2)) * (SPACEX + WIDTH);
                        let yl = this.ypar + HEIGHT + SPACEY;
                        let new_leaf = new Node(xl, yl, key, parent);
                        this.choices.get(this.depth).add(new_leaf);

                        i++;
                    }
                }
                else {
                    for (var item of this.current_level) {
                        let xl;
                        xl = xpar + (i - Math.trunc(n / 2)) * (SPACEX + WIDTH);
                        let yl = this.ypar + HEIGHT + SPACEY;
                        let new_leaf = new Leaf(xl, yl, item, parent);
                        this.choices.get(this.depth).add(new_leaf);

                        i++;
                    }
                }
            }

            for (var lf of this.choices.get(this.depth - 1)) {
                if (lf != parent) {
                    lf.color = "gray"
                }
                else {
                    lf.color = "brown"
                }
            }
        }

        drawTree() {
            for (var [key, l] of this.choices) {
                for (var leaf of l) {
                    leaf.drawMe(this.context)
                }
            }
        }

        clickLevel(event) {
            console.log("event : " + event.x + " , " + event.y);
            var inside = false;
            var clicked_depth;
            var clicked_leaf;
            for (var [key, l] of this.choices) {
                for (var leaf of l) {
                    if (leaf.isClicked(event.clientX - 8, event.clientY - 8)) {
                        inside = true
                        clicked_depth = key;
                        clicked_leaf = leaf;
                    }
                }
            }

            if (inside && !(clicked_leaf instanceof Leaf)) {
                console.log("clicked depth : " + clicked_depth)
                console.log("this.depth : " + clicked_depth)
                if (clicked_depth == this.depth) {
                    for (var lf of this.choices.get(this.depth)) {
                        if (lf != clicked_leaf) {
                            lf.color = "gray"
                        }
                    }
                }
                else {
                    let new_choices = new Map();
                    this.current_level = this.getLevel(clicked_depth);
                    for (var k = 0; k <= parseInt(clicked_depth); k++) {
                        new_choices.set(k, this.choices.get(k));
                    }
                    this.choices = new_choices;
                    this.depth = clicked_depth;
                    for (var lf of this.choices.get(this.depth)) {
                        if (lf != clicked_leaf) {
                            lf.color = "gray"
                        }
                    }
                }
                this.createLeaves(clicked_leaf);
                this.clearCanvas();
                this.drawTree()

            }
            return inside;
        }

        clearCanvas() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        getLevel(dph) {

            if (dph == 0) {
                return this.levels;
            }

            else {
                let res = this.levels;

                let parents = new Map();

                for (var j = dph; j >= 0; j--) {
                    const [first] = this.choices.get(j)
                    let parent = first.parent;
                    parents.set(dph - j, parent);
                }

                console.log(parents)

                for (var j = 0; j < dph; j++) {
                    res = res.get(parents.get(j).txt);
                }

                return res;
            }

        }

    }



    const levelsTest = new Map([

        ["Same parts", new Map([

            ["Fracture / Fatigue", new Set([

                "Distortion"

            ])],

            ["Radiation degradation", new Set([

                "Fracture / Fatigue"

            ])],

            ["Distortion", new Set([

                "Mechanical wear",

                "Fracture / Fatigue"

            ])],

        ])],

        ["Different parts", new Map([

            ["Mechanical Wear", new Set([

                "Fracture / Fatigue"

            ])],

            ["Fracture / Fatigue", new Set([

                "Distortion"

            ])],

            ["Distortion", new Set([

                "Mechanical wear",

                "Fracture / Fatigue"

            ])],

        ])]

    ]);

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext('2d');

    let testTree = new DecisionTree("testTree", levelsTest, canvas, context);


    this.canvas.addEventListener('click', event => {
        testTree.clickLevel(event);
    });

}
