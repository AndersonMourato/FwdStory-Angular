import { Injectable } from '@angular/core';
import { IPriority, priorityMocks } from '../models/priority.interface';

@Injectable({
  providedIn: 'root',
})
export class PriorityService {
  priorities: IPriority[] = priorityMocks;

  constructor() {}

  getPriorities(): IPriority[] {
    return this.priorities;
  }

  setPriority(priority: IPriority): void {
    this.priorities.push(priority);
  }

  updatePriority(priority: IPriority): void {
    const index = this.priorities.findIndex((p) => p.id === priority.id);
    this.priorities[index] = priority; 
  }
}
