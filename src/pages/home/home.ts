import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  columnName : String
  
  constructor(public navCtrl: NavController) {

 


  }
  Expand(columnName){

    let col1 = document.getElementsByClassName('column-1') as HTMLCollectionOf<HTMLElement>;
    let col2 = document.getElementsByClassName('column-2') as HTMLCollectionOf<HTMLElement>;
    let col3 = document.getElementsByClassName('column-3') as HTMLCollectionOf<HTMLElement>;

    switch (columnName){
      case 'column-1':
      col2[0].removeAttribute('col-9');
      col3[0].removeAttribute('col-9');
      col1[0].setAttribute('col-9','');  
      break;
  
      case 'column-2':
          
        col1[0].removeAttribute('col-9');
        col3[0].removeAttribute('col-9');
        col2[0].setAttribute('col-9','');         
      
        break;
        case 'column-3':

        col1[0].removeAttribute('col-9');
        col2[0].removeAttribute('col-9');
        col3[0].setAttribute('col-9','');
        break; 
    }
    }

  }


