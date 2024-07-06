import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { QrCodeModule } from 'ng-qrcode';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
import { Options } from 'ngx-qrcode-styling';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    QrCodeModule,
    NgxQrcodeStylingModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}
  title = 'Masters Clinic QR Code';

  // QR Code Form
  qr_form = this.fb.group({
    url: [''],
  });

  get url() {
    return this.qr_form.controls['url'];
  }

  generate_qr() {
    if (this.qr_form.controls.url.value) {
      this.qrcode_value = this.qr_form.controls.url.value;
    }
    this.qr_form.reset();
  }

  // QR Code
  qrcode_value: any = null;
  eci = '\u001D003';

  public config: Options = {
    width: 600,
    height: 600,
    image: 'assets/logo.jpg',
    margin: 10,
    template: 'luxury',

    dotsOptions: {
      gradient: {
        type: 'linear',
        colorStops: [
          { offset: 100, color: '#e7c143' },
          { offset: 200, color: '#111111' },
        ],
      },
      type: 'classy-rounded',
    },
    cornersSquareOptions: {
      color: '#e7c143',
    },
    cornersDotOptions: {
      color: '#e7c143',
    },
  };
}
