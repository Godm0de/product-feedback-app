import { Directive, HostBinding } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[uiInput]',
})
export class UIInputDirective {
    @HostBinding('class') elementClass = 'ui-input';
}
