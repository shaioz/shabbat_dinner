import { Component } from '@angular/core';
// import {DialogModule} from 'primeng/primeng';
// var mongoose = require('mongoose');

export class Dinner {
  id: number;
  date: Date;
  pictures: string[];
  washer: string;
}

export class Person {
  name: string;
  is_coming: boolean;
  constructor(name) {
    this.name = name;
    this.is_coming = false;
  }
  coming() {
    const female: boolean = this.name === 'כרמלה';
    if (this.is_coming) {
      if (female) {
        return 'אישרה';
      } else {
        return 'אישר';
      }
    } else {
      if (female) {
        return 'לא אישרה';
      } else {
        return 'לא אישר';
      }
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ארוחת השבת של משפחת אוהב ציון';
  when_text = 'מתי ארוחת שבת הבאה?';
  finish_text = 'הסתיימה הארוחה';
  plan_text = 'קבע ארוחה הבאה';
  no_dinner_text = 'עדיין לא קבענו ארוחה';
  who_washed = 'שטף כלים:';
  when_date: Date = new Date('2017-07-07');
  previous_list: Dinner[] = null;
  coming_list: Person[] = [];

  constructor() {
    this.coming_list.push(new Person('כרמלה'));
    this.coming_list.push(new Person('נחמן'));
    this.coming_list.push(new Person('קרל'));
    this.coming_list.push(new Person('שי'));
    this.coming_list.push(new Person('אור'));
    this.coming_list.push(new Person('מרום'));


    // mongoose.connect('mongodb://admin:shai7588@ds147052.mlab.com:47052/heroku_xdc2g3cj');
    // var db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', function() {
    //   we're connected!
      // var dinnerSchema = mongoose.Schema({
      //   date: Date,
      //   washer: String
      // });
      // var Dinner = mongoose.model('Dinner', dinnerSchema);
    // });
    // Connect to the db
    // MongoClient.connect('mongodb://admin:shai7588@ds147052.mlab.com:47052/heroku_xdc2g3cj', function(err, db) {
    //   if (!err) {
    //     console.log('We are connected');
    //     this.db = db;
    //     db.collection('dinners').forEach(function (doc) {
    //       console.log(doc);
    //     });
    //   }
    // });
  }

  finishDinner(washer) {
    if (this.previous_list === null) {
      this.previous_list = [];
    }
    const my_dinner = new Dinner();
    my_dinner.date = this.when_date;
    my_dinner.washer = washer;
    this.previous_list.push(my_dinner);
    this.when_date = null;
  }
  planDinner() {
    const n = 5;
  }
}
