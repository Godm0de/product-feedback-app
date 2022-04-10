import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanCardComponent } from './kanban-card.component';

@NgModule({
  declarations: [
    KanbanCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [KanbanCardComponent]
})
export class KanbanCardModule { }