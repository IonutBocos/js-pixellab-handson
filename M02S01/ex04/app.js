class Car {
  areHazardsOn = false;
  intervalId = -1;
  isLightOn = false;
  constructor(positionX, positionY, color, wheealColor) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;
    this.wheealColor = wheealColor;

    this.frame = this.e('div');
    this.frame.classList.add('frame');
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    this.car = this.e('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = this.e('div');
    this.carTop.classList.add('car__top');
    this.car.append(this.carTop);
    this.carTop.style.backgroundColor = this.color;

    this.carBody = this.e('div');
    this.carBody.classList.add('car__body');
    this.car.append(this.carBody);
    this.carBody.style.backgroundColor = this.color;

    this.lightBack = this.e('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.lightFront = this.e('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.areHazardsOn = this.e('div');
    this.areHazardsOn.classList.add('light--front', 'light--back');
    this.carBody.append(this.areHazardsOn);

    this.wheelBack = this.e('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.hubCapBack = this.e('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);

    this.wheelFront = this.e('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.hubCapFront = this.e('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);
  }

  render() {
    document.body.append(this.frame);

    return this;
  }

  turnLightOn() {
    this.lightFront.classList.add('light--on');
    this.isLightOn = true;

    return this;
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');
    this.isLightOn = false;
    return this;
  }

  engageBreak() {
    this.lightBack.classList.add('light--on');

    return this;
  }

  disengageBreak() {
    this.lightBack.classList.remove('light--on');

    return this;
  }

  changeTireColor() {
    this.wheelFront.style.backgroundColor = this.wheealColor;
    this.wheelBack.style.backgroundColor = this.wheealColor;

    return this;
  }

  moveTo() {
    this.frame.style.left = `100px`;
    this.frame.style.top = `100px`;

    return this;
  }

  // toggleHazards() {
  //   this.lightFront = this.areHazardsOn;
  //   this.lightBack = this.areHazardsOn;

  //   return this;
  // }

  e(elementName) {
    // wrappers in action
    return document.createElement(elementName);
  }

  toggleHazards() {
    if (this.areHazardsOn === true) {
      clearInterval(this.intervalId);
      this.areHazardsOn = false;

      if (this.isLightOn === true) {
        this.lightFront.classList.add('light--on');
      } else {
        this.lightFront.classList.remove('light--on');
      }

      return;
    }

    const self = this;

    self.intervalId = setInterval(function () {
      self.lightFront.classList.toggle('light--on');
      self.lightBack.classList.toggle('light--on');
    }, 1000);

    self.areHazardsOn = true;
  }
}

const car01 = new Car(250, 16, 'red', 'gray')
  .render()
  .turnLightOn()
  .engageBreak()
  .moveTo()
  .changeTireColor().toggleHazards;

// another
const car02 = new Car(16, 250, 'blue', 'gray');
car02.render().turnLightOn();
car02.render();
car02.engageBreak();
car02.changeTireColor();
car02.toggleHazards();

const car03 = new Car(16, 16, 'teal', 'gray')
  .render()
  .turnLightOn()
  .engageBreak()
  .changeTireColor();

// Folosind fisierele rezultate din exercitiul 04. Creeaza configurare pentru culoarea rotilor
// si a capacelor de roti si metode pentru schimbarea lor dinamica.
// const car0x = new Car(10, 10, ‘blue’, ‘red’, ‘green’)  <red, si green sunt culorile rotilor, optional, default pe negru>
// car0x.changeTireColor(‘red’); car0x.changeCapColor(‘blue’);
