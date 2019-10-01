import { HttpClient } from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import { map } from "rxjs/operators";
import {Task} from "./task.model";

@Injectable()
export class TasksService {

  onTaskAdded = new EventEmitter<Task>();

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get("/api/tasks").pipe();
  }

  saveTask(task: Task, checked: boolean) {
    task.completed = checked;
    return this.http.post('/api/tasks/save', task).pipe();
  }

  addTask(task: Task) {
    return this.http.post("/api/tasks/save", task).pipe();
  }
}
