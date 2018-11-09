import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'keepHtmlTrangChu', pure: false })
export class EscapeHtmlPipeTrangChu implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
