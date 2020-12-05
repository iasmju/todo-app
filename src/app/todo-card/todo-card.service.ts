import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Task } from '../shared/task.model';

@Injectable({ providedIn: 'root' })
export class TodoCardService {

    url = 'http://localhost:3000/task';

    constructor(private http: HttpClient) { }

    addTask(name: string, complete: boolean) {
        const taskData = { "taskDto": { "name": name, "complete": complete } }
        const url = `${this.url}/add-task`;
        return this.http.post(url, taskData);
    }

    fetchTasks() {
        return this.http
            .get(this.url)
            .pipe(
                map((responseData: { Task }) => {
                    const tasksArray: Task[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            tasksArray.push({ ...responseData[key] })
                        }
                    }
                    return tasksArray
                })
            )
    }

    deleteTask(taskID: string) {
        const url = `${this.url}/delete-task/${taskID}`;
        return this.http.delete(url)
    }

    editTask(taskID: string, name: string, complete: boolean) {
        const taskData = { "taskDto": { "name": name, "complete": complete } };

        const url = `${this.url}/update-task/${taskID}`;
        return this.http.put(url, taskData);
    }

    checkTask(taskID: string) {
        const url = `${this.url}/checked-task/${taskID}`;
        return this.http.put(url, "");
    }
}