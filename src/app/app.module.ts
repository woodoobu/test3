
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartComponent } from './../pages/start/start.component';

//24個問題分頁
import { AlarmComponent } from 'src/pages/alarm/alarm.component';
import { BankComponent } from 'src/pages/bank/bank.component';
import { CalculatorComponent } from 'src/pages/calculator/calculator.component';
import { CameraComponent } from 'src/pages/camera/camera.component';
import { ChatComponent } from 'src/pages/chat/chat.component';
import { ClockComponent } from 'src/pages/clock/clock.component';
import { ControlComponent } from 'src/pages/control/control.component';
import { DeliveryComponent } from 'src/pages/delivery/delivery.component';
import { EbookComponent } from 'src/pages/ebook/ebook.component';
import { FlashlightComponent } from 'src/pages/flashlight/flashlight.component';
import { GameComponent } from 'src/pages/game/game.component';
import { MapComponent } from 'src/pages/map/map.component';
import { MemoComponent } from 'src/pages/memo/memo.component';
import { MusicComponent } from 'src/pages/music/music.component';
import { PayComponent } from 'src/pages/pay/pay.component';
import { PedometerComponent } from 'src/pages/pedometer/pedometer.component';
import { PhonecallComponent } from 'src/pages/phonecall/phonecall.component';
import { ReceiptComponent } from 'src/pages/receipt/receipt.component';
import { ShoppingComponent } from 'src/pages/shopping/shopping.component';
import { SocialmediaComponent } from 'src/pages/socialmedia/socialmedia.component';
import { TranslateComponent } from 'src/pages/translate/translate.component';
import { VideoComponent } from 'src/pages/video/video.component';
import { WeatherComponent } from 'src/pages/weather/weather.component';
import { WebComponent } from 'src/pages/web/web.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,

    //24個問題分頁
    AlarmComponent,
    BankComponent,
    CalculatorComponent,
    CameraComponent,
    ChatComponent,
    ClockComponent,
    ControlComponent,
    DeliveryComponent,
    EbookComponent,
    FlashlightComponent,
    GameComponent,
    MapComponent,
    MemoComponent,
    MusicComponent,
    PayComponent,
    PedometerComponent,
    PhonecallComponent,
    ReceiptComponent,
    ShoppingComponent,
    SocialmediaComponent,
    TranslateComponent,
    VideoComponent,
    WeatherComponent,
    WebComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
