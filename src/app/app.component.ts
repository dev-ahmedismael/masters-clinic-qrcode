import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { QrCodeModule } from 'ng-qrcode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, QrCodeModule],
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
    this.qrcode_value = this.qr_form.controls.url.value;
    this.qr_form.reset();
  }

  // QR Code
  qrcode_value: any = '';
}
