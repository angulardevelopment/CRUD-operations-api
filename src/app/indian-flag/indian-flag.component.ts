import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, NgZone } from '@angular/core';

@Component({
  selector: 'app-indian-flag',
  templateUrl: './indian-flag.component.html',
  styleUrls: ['./indian-flag.component.scss']
})
export class IndianFlagComponent implements AfterViewInit {
 @ViewChild('chakra', { static: true }) chakraCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('flagEl', { static: true }) flagEl!: ElementRef<HTMLDivElement>;

  private ctx!: CanvasRenderingContext2D;
  private rot = 0;
  private rpm = 10; // rotations per minute
  private radPerSec = (this.rpm * 2 * Math.PI) / 60;
  private last = performance.now();

  constructor(private ngZone: NgZone) {}



  @HostListener('window:resize')
  onResize() {
    this.sizeCanvas();
    this.draw(this.rot);
  }



  private draw(angle: number) {
    const canvasEl = this.chakraCanvas.nativeElement;
    const w = canvasEl.clientWidth;
    const h = canvasEl.clientHeight;
    const cx = w / 2, cy = h / 2;

    this.ctx.clearRect(0, 0, w, h);

    const R = Math.min(w, h) * 0.5 - 2;
    const hubR = Math.max(3, R * 0.14);
    const spokes = 24;

    this.ctx.strokeStyle = '#000080';
    this.ctx.lineWidth = Math.max(2, R * 0.035);

    // Outer ring
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, R, 0, Math.PI * 2);
    this.ctx.stroke();

    // Spokes
    for (let i = 0; i < spokes; i++) {
      const a = angle + (i * 2 * Math.PI / spokes);
      const x1 = cx + Math.cos(a) * hubR;
      const y1 = cy + Math.sin(a) * hubR;
      const x2 = cx + Math.cos(a) * (R - this.ctx.lineWidth * 0.6);
      const y2 = cy + Math.sin(a) * (R - this.ctx.lineWidth * 0.6);
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }

    // Hub circle
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, hubR * 0.65, 0, Math.PI * 2);
    this.ctx.stroke();
  }

  private tick(now: number) {
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.rot = (this.rot + this.radPerSec * dt) % (Math.PI * 2);
    this.draw(this.rot);
    requestAnimationFrame(t => this.tick(t));
  }

  ngAfterViewInit(): void {
  this.ctx = this.chakraCanvas.nativeElement.getContext('2d')!;

  // Wait until the DOM has rendered
  requestAnimationFrame(() => {
    this.sizeCanvas();
    this.draw(0);
    this.ngZone.runOutsideAngular(() => this.tick(performance.now()));
  });
}

private sizeCanvas() {
  const rect = this.flagEl.nativeElement.getBoundingClientRect();
  if (rect.height === 0) return; // nothing to do if hidden

  const H = rect.height;
  const D = H / 4; // Chakra diameter

  const canvasEl = this.chakraCanvas.nativeElement;
  canvasEl.style.width = `${D}px`;
  canvasEl.style.height = `${D}px`;

  const dpr = window.devicePixelRatio || 1;
  canvasEl.width = D * dpr;
  canvasEl.height = D * dpr;

  this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

}
