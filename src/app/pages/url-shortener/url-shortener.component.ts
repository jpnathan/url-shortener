import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {UrlShortenerHttpService} from '../../services/http/url-shortener/url-shortener.http.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.sass']
})
export class UrlShortenerComponent implements OnInit {

  public form: FormGroup;
  public urlShortened: FormGroup;

  constructor(
    protected urlShortenerHttpService: UrlShortenerHttpService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      url: new FormControl(null, [ Validators.required ])
    });
  }

  public async onSubmit() {
    const params = this.form.controls['url'].value;
    const result = await this.urlShortenerHttpService.get(params);

    if (result.data.url) {
      this.urlShortened = result.data.url;
      this.form.reset();
    }
  }

}
