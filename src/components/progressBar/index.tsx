class ProgressBar {
    _clock: any;
    _count: number;
    className: string;
    img: HTMLDivElement;
    hodor: HTMLDivElement;
    constructor() {
        this._clock = null;
        this._count = 0;
        this.className = 'dtc-progress-progress-bar';
        this.hodor = document.createElement('div');
        this.hodor.className = this.className;

        this.img = document.createElement('div');
        this.img.className = 'dtc-progress-progress-img';
        this.img.innerHTML = `<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="30px" height="30px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                        <path fill="#2491F7" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                        <animateTransform attributeType="xml"
                          attributeName="transform"
                          type="rotate"
                          from="0 25 25"
                          to="360 25 25"
                          dur="0.6s"
                          repeatCount="indefinite"/>
                        </path>
                      </svg>`;
    }

    show() {
        this._count++;
        if (!this.hasAdded() && !this._clock) {
            this._clock = setTimeout(() => {
                document.body.appendChild(this.hodor);
                document.body.appendChild(this.img);
            }, 200);
        }
    }

    hide() {
        this._count--;
        if (this._count <= 0) {
            if (this._clock) {
                clearTimeout(this._clock);
                this._clock = null;
            }
            if (this.hasAdded()) {
                this.hodor.remove();
                this.img.remove();
            }
        }
    }

    hasAdded() {
        return document.getElementsByClassName(this.className).length > 0;
    }
}
export default new ProgressBar();
