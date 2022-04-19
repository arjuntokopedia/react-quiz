class Planet {
  constructor(x, y, radius, color, velocity, orbitRadius) {
    this.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.radian = 0;
    this.orbitRadius = orbitRadius;
  }

  draw(ctx) {
    // Planet Path
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(this.startX, this.startY, this.orbitRadius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.stroke();

    // Planet
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  update(ctx) {
    this.draw(ctx);
    if (this.velocity > 0) {
      this.radian += this.velocity;

      this.x = this.startX + Math.cos(this.radian) * this.orbitRadius;
      this.y = this.startY + Math.sin(this.radian) * this.orbitRadius;
    }
  }
}
export default Planet;
