import { CdkStepper } from '@angular/cdk/stepper';
import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports:[ NgIf,NgFor,NgTemplateOutlet],
  selector: 'app-stepper',
  standalone:true,
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  providers: [{provide: CdkStepper, useExisting: StepperComponent}]
})
export class StepperComponent extends CdkStepper implements OnInit{
  @Input() linearModeSelected = true;

  ngOnInit(): void {
    this.linear = this.linearModeSelected;
  }
  onClick(index: number){
    this.selectedIndex = index;
  }

}
