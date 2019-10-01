import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import {Task} from "./task.model";

@Injectable()
export class TasksService {

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get("/api/tasks").pipe();
  }

  saveTask(task: Task, checked: boolean) {
    task.completed = checked;
    return this.http.post('/api/tasks/save', task).pipe();
  }
}
