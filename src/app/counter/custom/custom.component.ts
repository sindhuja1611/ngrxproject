import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { change, custom } from '../state/counter.action';
import { getName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
value:any;
MyName$?: Observable< string>;

  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {

    this.MyName$ =this.store.select(getName);
  }


 onAdd()
 {
  this.store.dispatch(custom({value: +this.value}));
 }

 onChange(){
  this.store.dispatch(change());
 }
}
