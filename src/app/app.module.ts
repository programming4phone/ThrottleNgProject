import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { TabMenuModule } from 'primeng/components/tabmenu/tabmenu';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { SharedModule } from 'primeng/components/common/shared';
import { GrowlModule } from 'primeng/components/growl/growl';
import { PanelModule } from 'primeng/components/panel/panel';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';

import { AppComponent } from './app.component';
import { QueryUsageComponent } from './query-usage/query-usage.component';
import { ChangeUsageComponent } from './change-usage/change-usage.component';
import { TierAdminComponent } from './tier-admin/tier-admin.component';
import { SplashPageComponent } from './splash-page/splash-page.component';

import { TierService } from './services/tier/tier.service';
import { UsageService } from './services/usage/usage.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    QueryUsageComponent,
    ChangeUsageComponent,
    TierAdminComponent,
    SplashPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TabMenuModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    PanelModule,
    RadioButtonModule,
    AppRoutingModule
  ],
  providers: [TierService, UsageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
