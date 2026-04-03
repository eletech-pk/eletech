// @ts-nocheck
export const renderCanvas = function () {
    let ctx = document.getElementById("canvas").getContext("2d");
    if (!ctx) return;
    ctx.running = true;
    ctx.frame = 1;

    // Node
    function Node() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
    }

    // configs
    const E = {
        debug: true,
        friction: 0.5,
        trails: 40, // Dropped to 40 to halve original computation load
        size: 50,   // Restored to 50 for silky smooth structural arcs
        dampening: 0.025,
        tension: 0.99,
    };

    let pos = { x: 0, y: 0 };
    let lines = [];

    function n(e) {
        this.init(e || {});
    }
    n.prototype = {
        init: function (e) {
            this.phase = e.phase || 0;
            this.offset = e.offset || 0;
            this.frequency = e.frequency || 0.001;
            this.amplitude = e.amplitude || 1;
        },
        update: function () {
            this.phase += this.frequency;
            return this.offset + Math.sin(this.phase) * this.amplitude;
        },
        value: function () {
            return this.offset + Math.sin(this.phase) * this.amplitude;
        },
    };

    let f = new n({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
    });

    function Line(e) {
        this.init(e || {});
    }

    Line.prototype = {
        init: function (e) {
            this.spring = e.spring + 0.1 * Math.random() - 0.05;
            this.friction = E.friction + 0.01 * Math.random() - 0.005;
            this.nodes = [];
            let t;
            for (let n = 0; n < E.size; n++) {
                t = new Node();
                t.x = pos.x;
                t.y = pos.y;
                this.nodes.push(t);
            }
        },
        update: function () {
            let e = this.spring;
            let t = this.nodes[0];
            t.vx += (pos.x - t.x) * e;
            t.vy += (pos.y - t.y) * e;
            for (let n, i = 0, a = this.nodes.length; i < a; i++) {
                t = this.nodes[i];
                if (0 < i) {
                    n = this.nodes[i - 1];
                    t.vx += (n.x - t.x) * e;
                    t.vy += (n.y - t.y) * e;
                    t.vx += n.vx * E.dampening;
                    t.vy += n.vy * E.dampening;
                }
                t.vx *= this.friction;
                t.vy *= this.friction;
                t.x += t.vx;
                t.y += t.vy;
                e *= E.tension;
            }
        },
        draw: function () {
            let e, t, n = this.nodes[0].x, i = this.nodes[0].y;
            ctx.beginPath();
            ctx.moveTo(n, i);
            let a;
            for (a = 1; a < this.nodes.length - 2; a++) {
                e = this.nodes[a];
                t = this.nodes[a + 1];
                n = 0.5 * (e.x + t.x);
                i = 0.5 * (e.y + t.y);
                ctx.quadraticCurveTo(e.x, e.y, n, i);
            }
            e = this.nodes[a];
            t = this.nodes[a + 1];
            ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
            ctx.stroke();
            ctx.closePath();
        },
    };

    function onMousemove(e) {
        function o() {
            lines = [];
            for (let e = 0; e < E.trails; e++) {
                lines.push(new Line({ spring: 0.45 + (e / E.trails) * 0.025 }));
            }
        }
        function c(e) {
            e.touches
                ? ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
                : ((pos.x = e.clientX), (pos.y = e.clientY));
        }
        function l(e) {
            if (1 == e.touches.length) {
                ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY));
            }
        }

        document.removeEventListener("mousemove", onMousemove);
        document.removeEventListener("touchstart", onMousemove);
        document.addEventListener("mousemove", c);
        document.addEventListener("touchmove", c);
        document.addEventListener("touchstart", l);
        c(e);
        o();
        render();
    }

    function render() {
        if (ctx.running) {
            ctx.globalCompositeOperation = "source-over";
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            
            // Restoring the Canvas pixel addition which multiplies overlap opacities 
            // to recreate the glowing slow-spread fade illusion
            ctx.globalCompositeOperation = "lighter";
            // 0.05 opacity compensates for having 40 trails instead of 80
            ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",100%,50%,0.05)";
            ctx.lineWidth = 10;
            
            for (let e, t = 0; t < E.trails; t++) {
                e = lines[t];
                if (e) {
                    e.update();
                    e.draw();
                }
            }
            ctx.frame++;
            if (ctx.running) {
                window.requestAnimationFrame(render);
            }
        }
    }

    let canvas = document.getElementById("canvas");
    function resizeCanvas() {
        if (canvas && canvas.parentElement) {
            ctx.canvas.width = canvas.parentElement.clientWidth;
            ctx.canvas.height = canvas.parentElement.clientHeight;
        } else {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
        }
    }

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("touchstart", onMousemove);
    document.body.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", () => {
        if (!ctx.running) {
            ctx.running = true;
            render();
        }
    });
    window.addEventListener("blur", () => {
        ctx.running = false;
    });

    resizeCanvas();
    
    // Auto-start exactly once initially
    if (!ctx.running) {
        ctx.running = true;
        render();
    }

    return {
        start: () => {
            if (!ctx.running) {
                ctx.running = true;
                render();
            }
        },
        stop: () => {
            ctx.running = false;
        }
    };
};
