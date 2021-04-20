class Slider {

    constructor(carouselListBackground) {
        this.carouselListBackground = carouselListBackground;
        this.position = 0;
        this.carouselListWrapper = carouselListBackground.querySelector('.carousel-list-wrapper');
        this.carouselList = carouselListBackground.querySelectorAll('.carousel-list');
        this.sliderImagesCount = this.carouselList.length;


        carouselListBackground.querySelector('button.left').addEventListener('click', this.sliderLeft.bind(this));
        carouselListBackground.querySelector('button.right').addEventListener('click', this.sliderRight.bind(this));

        if (carouselListBackground.dataset.initialIndex) {
            this.position = +carouselListBackground.dataset.initialIndex;
        }
        if (!carouselListBackground.dataset.disablePoints) {
            this.createSquare();
        }

        this.slideTransform();
    }

    sliderRight() {
        if (this.position < (this.sliderImagesCount - 1)) {
            this.position++;
        } else {
            this.position = 0;
        }
        this.slideTransform();
    }

    sliderLeft() {
        if (this.position > 0) {
            this.position--;
        } else {
            this.position = this.sliderImagesCount - 1;
        }
        this.slideTransform();
    }

    slideTransform() {
        this.carouselListWrapper.style.right = this.position * 100 + '%';

        if (this.imageSquares) {
            const activeSquare = this.imageSquares.querySelector('.active');
            if (activeSquare)
                activeSquare.classList.remove('active');

            this.imageSquares.children.item(this.position).classList.add('active');
        }
    }

    createSquare() {
        this.imageSquares = document.createElement('div');
        this.imageSquares.classList.add('little-squares');
        this.carouselListBackground.append(this.imageSquares);

        this.carouselList.forEach((slide, index) => {
            const square = document.createElement('div');
            square.classList.add('little-square');
            this.imageSquares.append(square);
            this.imageSquares.appendChild(square);

            square.addEventListener('click', () => {
                this.position = index;
                this.slideTransform();
            });
        });
    }
}

document.querySelectorAll('.carousel-list-background').forEach(carouselListBackground => {
    const s = new Slider(carouselListBackground);
})








