/*
 * @Author: along
 * @Description:
 * @Date: 2025-01-23 09:06:25
 * @LastEditors: along
 * @LastEditTime: 2025-01-23 09:28:14
 * @FilePath: /cxy-web-tool/src/utils/confetti.ts
 */
import confetti from "canvas-confetti";

class Confetti {
  constructor() {
    this.count = -1;
    this.init();
  }

  init() {
    this.count++;
    this.count = this.count > 9 ? 1 : this.count;

    switch (this.count) {
      case 1:
        this.basicCannon();
        break;
      case 2:
        this.randomDirection();
        break;
      case 3:
        this.realisticLook();
        break;
      case 4:
        this.fireworks();
        break;
      case 5:
        this.stars();
        break;
      case 6:
        this.snow();
        break;
      case 7:
        this.schoolPride();
        break;
      case 8:
        this.customShapes();
        break;
      case 9:
        this.emoji();
        break;
      default:
        break;
    }
  }

  basicCannon() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  randomDirection() {
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
    });
  }

  realisticLook() {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  fireworks() {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }

  stars() {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }

  snow() {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    (function frame() {
      const timeLeft = animationEnd - Date.now();
      const ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: Math.random() * skew - 0.2,
        },
        colors: ["#ffffff"],
        shapes: ["circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
  }

  schoolPride() {
    const end = Date.now() + 5 * 1000;

    // go Buckeyes!
    const colors = ["#bb0000", "#ffffff"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  customShapes() {
    const pumpkin = confetti.shapeFromPath({
      path: "M449.4 142c-5 0-10 .3-15 1a183 183 0 0 0-66.9-19.1V87.5a17.5 17.5 0 1 0-35 0v36.4a183 183 0 0 0-67 19c-4.9-.6-9.9-1-14.8-1C170.3 142 105 219.6 105 315s65.3 173 145.7 173c5 0 10-.3 14.8-1a184.7 184.7 0 0 0 169 0c4.9.7 9.9 1 14.9 1 80.3 0 145.6-77.6 145.6-173s-65.3-173-145.7-173zm-220 138 27.4-40.4a11.6 11.6 0 0 1 16.4-2.7l54.7 40.3a11.3 11.3 0 0 1-7 20.3H239a11.3 11.3 0 0 1-9.6-17.5zM444 383.8l-43.7 17.5a17.7 17.7 0 0 1-13 0l-37.3-15-37.2 15a17.8 17.8 0 0 1-13 0L256 383.8a17.5 17.5 0 0 1 13-32.6l37.3 15 37.2-15c4.2-1.6 8.8-1.6 13 0l37.3 15 37.2-15a17.5 17.5 0 0 1 13 32.6zm17-86.3h-82a11.3 11.3 0 0 1-6.9-20.4l54.7-40.3a11.6 11.6 0 0 1 16.4 2.8l27.4 40.4a11.3 11.3 0 0 1-9.6 17.5z",
      matrix: [
        0.020491803278688523, 0, 0, 0.020491803278688523, -7.172131147540983,
        -5.9016393442622945,
      ],
    });
    // tree shape from https://thenounproject.com/icon/pine-tree-1471679/
    const tree = confetti.shapeFromPath({
      path: "M120 240c-41,14 -91,18 -120,1 29,-10 57,-22 81,-40 -18,2 -37,3 -55,-3 25,-14 48,-30 66,-51 -11,5 -26,8 -45,7 20,-14 40,-30 57,-49 -13,1 -26,2 -38,-1 18,-11 35,-25 51,-43 -13,3 -24,5 -35,6 21,-19 40,-41 53,-67 14,26 32,48 54,67 -11,-1 -23,-3 -35,-6 15,18 32,32 51,43 -13,3 -26,2 -38,1 17,19 36,35 56,49 -19,1 -33,-2 -45,-7 19,21 42,37 67,51 -19,6 -37,5 -56,3 25,18 53,30 82,40 -30,17 -79,13 -120,-1l0 41 -31 0 0 -41z",
      matrix: [
        0.03597122302158273, 0, 0, 0.03597122302158273, -4.856115107913669,
        -5.071942446043165,
      ],
    });
    // heart shape from https://thenounproject.com/icon/heart-1545381/
    const heart = confetti.shapeFromPath({
      path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",
      matrix: [
        0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666,
        -5.533333333333333,
      ],
    });

    const defaults = {
      scalar: 2,
      spread: 180,
      particleCount: 30,
      origin: { y: -0.1 },
      startVelocity: -35,
    };

    confetti({
      ...defaults,
      shapes: [pumpkin],
      colors: ["#ff9a00", "#ff7400", "#ff4d00"],
    });
    confetti({
      ...defaults,
      shapes: [tree],
      colors: ["#8d960f", "#be0f10", "#445404"],
    });
    confetti({
      ...defaults,
      shapes: [heart],
      colors: ["#f93963", "#a10864", "#ee0b93"],
    });
  }

  emoji() {
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: "🦄", scalar });
    const unicorn2 = confetti.shapeFromText({ text: "🐷", scalar });
    const unicorn3 = confetti.shapeFromText({ text: "🐶", scalar });
    const unicorn4 = confetti.shapeFromText({ text: "🐯", scalar });
    const unicorn5 = confetti.shapeFromText({ text: "☠️", scalar });
    const unicorn6 = confetti.shapeFromText({ text: "👹", scalar });
    const unicorn7 = confetti.shapeFromText({ text: "🐘", scalar });
    const unicorn8 = confetti.shapeFromText({ text: "🦆", scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [
        unicorn,
        unicorn2,
        unicorn3,
        unicorn4,
        unicorn5,
        unicorn6,
        unicorn7,
        unicorn8,
      ],
      scalar,
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 30,
      });

      confetti({
        ...defaults,
        particleCount: 5,
        flat: true,
      });

      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    setTimeout(shoot, 300);
    setTimeout(shoot, 400);
    setTimeout(shoot, 500);
    setTimeout(shoot, 600);
    setTimeout(shoot, 700);
    setTimeout(shoot, 800);
  }
}

export default new Confetti();
