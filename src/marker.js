export default class {
  constructor(options = {}) {
    this.options = options;

    this.coord = this.options.coord;
    this.img = this.options.img;

    this.text = this.options.text;

    this.height = Number.isFinite(this.options.height)
      ? Number(this.options.height) : null;
    this.width = Number.isFinite(this.options.width)
      ? Number(this.options.width) : null;

    this.drawWidth = Number(this.options.drawWidth || this.options.width);
    this.drawHeight = Number(this.options.drawHeight || this.options.height);
    this.resizeMode = this.options.resizeMode || 'cover';

    this.offsetX = Number.isFinite(this.options.offsetX)
      ? Number(this.options.offsetX) : this.drawWidth / 2;

    this.offsetY = Number.isFinite(this.options.offsetY)
      ? Number(this.options.offsetY) : this.drawHeight;
    this.offset = [this.offsetX, this.offsetY];
  }

  setSize(width, height) {
    this.width = Number(width);
    this.height = Number(height);

    if (Number.isNaN(this.drawWidth)) {
      this.drawWidth = this.width;
    }

    if (Number.isNaN(this.drawHeight)) {
      this.drawHeight = this.height;
    }
  }

  /**
   *  Set icon data
   */
  set(img) {
    this.imgData = img;
  }

  extentPx() {
    return [
      this.offset[0],
      (this.height - this.offset[1]),
      (this.width - this.offset[0]),
      this.offset[1],
    ];
  }
}
