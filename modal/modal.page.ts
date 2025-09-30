import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonButton,
  IonButtons,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  IonChip,
  IonIcon
 } from '@ionic/angular/standalone';

 import { addIcons } from 'ionicons'; 

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonAvatar,
    IonButton,
    IonButtons,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonRow,
    IonChip,
    IonIcon
  ]
})
export class ModalPage implements OnInit {


  presentingElement!: HTMLElement | null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
}
}