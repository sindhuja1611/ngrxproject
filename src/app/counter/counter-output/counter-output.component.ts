import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter, getName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
   //counter:any;
   
   counter$?: Observable<number>;
// counterSubcription?:Subscription;
  constructor(private store:Store<{counter:CounterState}>) { }
  
  ngOnInit(): void {
  //  this.counterSubcription= this.store.select('counter').subscribe(data=>{
  //     this.counter=data.counter
  //   });
    this.counter$ =this.store.select(getCounter);
    
    
  }

// ngOnDestroy(): void {
//   if(this.counterSubcription){
//     this.counterSubcription.unsubscribe();
//   }
//}
  }


