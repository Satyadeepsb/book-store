import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { SpinnerService, SpinnerState } from "./spinner.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html"
})
export class SpinnerComponent implements OnInit, OnDestroy {
  @Input() spinnerName;

  visible = false;
  private spinnerStateChanged: Subscription;
  constructor(private spinnerService: SpinnerService) { }
  ngOnInit() {
   // componentHandler.upgradeDom();
    this.spinnerStateChanged = this.spinnerService.spinnerState
      .subscribe((state: SpinnerState) => this.visible = state.show);
  }
  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}
