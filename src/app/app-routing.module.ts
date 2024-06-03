import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from 'src/pages/start/start.component';

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


const routes: Routes = [

  {path: '', component:StartComponent},

  //24個問題分頁
  {path: 'alarm', component:AlarmComponent},
  {path: 'bank', component:BankComponent},
  {path: 'calculator', component:CalculatorComponent},
  {path: 'camera', component:CameraComponent},
  {path: 'chat', component:ChatComponent},
  {path: 'clock', component:ClockComponent},
  {path: 'control', component:ControlComponent},
  {path: 'delivery', component:DeliveryComponent},
  {path: 'ebook', component:EbookComponent},
  {path: 'flashlight', component:FlashlightComponent},
  {path: 'game', component:GameComponent},
  {path: 'map', component:MapComponent},
  {path: 'memo', component:MemoComponent},
  {path: 'music', component:MusicComponent},
  {path: 'pay', component:PayComponent},
  {path: 'pedometer', component:PedometerComponent},
  {path: 'phonecall', component:PhonecallComponent},
  {path: 'receipt', component:ReceiptComponent},
  {path: 'shopping', component:ShoppingComponent},
  {path: 'socialmedia', component:SocialmediaComponent},
  {path: 'translate', component:TranslateComponent},
  {path: 'video', component:VideoComponent},
  {path: 'weather', component:WeatherComponent},
  {path: 'web', component:WebComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
