package com.therealdanvega.service;

import com.therealdanvega.domain.Task;
import com.therealdanvega.repository.TaskRepository;

public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> list() {
        return null;
    }
}
