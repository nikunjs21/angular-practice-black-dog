import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplCountService {
  public count = new BehaviorSubject<any>(0);    
  public emplCount = this.count.asObservable();
  constructor() { 
    console.log("TypeOf", this.emplCount);
  }
}
