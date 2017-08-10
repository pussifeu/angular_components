import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonComponent} from './button/button.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        AppComponent,
        ButtonComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
