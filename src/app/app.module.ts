import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { routing } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { MobxAngularModule } from 'mobx-angular';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { OperationsModule } from './operations/operations.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from './shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AutoGeneratedComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    MobxAngularModule,
    NgxSpinnerModule,
    NgSelectModule,
    routing,
    AdminModule,
    AuthenticationModule,
    OperationsModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    NgxSpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }