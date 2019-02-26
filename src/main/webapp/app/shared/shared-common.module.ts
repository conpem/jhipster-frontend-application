import { NgModule } from '@angular/core';

import { FrontendappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FrontendappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FrontendappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FrontendappSharedCommonModule {}
