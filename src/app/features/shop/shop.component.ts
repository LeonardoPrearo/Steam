import {Component, OnInit} from '@angular/core';
import {Game} from "../../core/module/game";
import {GameService} from "../../core/service/game.service";
import {Subscription} from "rxjs";
import Swiper, {SwiperOptions} from "swiper";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  gamesList : Game[];
  getAllGamesSubscription : Subscription;

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
    this.getAllGames()

  }

  getAllGames(){
    this.getAllGamesSubscription = this.gameService.getAllGames().subscribe(
      observer => {
        this.gamesList = [...observer]
      },
      error => {
        console.log(error)}
    )
  }

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  ngOnDestroy() {
    this.getAllGamesSubscription.unsubscribe();

  }

}
