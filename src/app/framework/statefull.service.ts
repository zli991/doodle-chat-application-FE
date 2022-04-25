import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class StatefullService implements OnDestroy {

  protected subscription: Subscription = new Subscription();

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  
}
