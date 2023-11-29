import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, Typography, Card, CardContent, Box } from '@mui/material';

// User type
type User = {
    id: string;
    name: string;
};

// Task type
type Task = {
    id: string;
    title: string;
    assignee: User;
    project: string;
};

// Admin Page Component
const AdminPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);

    // Fetch users and tasks from API or state management

    const handleAddUser = () => {
        // Handle add user
    };

    const handleEditUser = (user: User) => {
        // Handle edit user
    };

    const handleDeleteUser = (userId: string) => {
        // Handle delete user
    };

    const handleAddTask = () => {
        // Handle add task
    };

    const handleEditTask = (task: Task) => {
        // Handle edit task
    };

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardContent>
                <Typography variant="h1">Admin Page</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Typography variant="h2">Users</Typography>
                    <Button variant="contained" color="primary" onClick={handleAddUser}>Add User</Button>
                </Box>
                <List>
                    {users.map((user) => (
                        <ListItem key={user.id}>
                            <ListItemText primary={user.name} />
                            <Button variant="contained" color="primary" onClick={() => handleEditUser(user)}>Edit</Button>
                            <Button variant="contained" color="secondary" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Typography variant="h2">Tasks</Typography>
                    <Button variant="contained" color="primary" onClick={handleAddTask}>Add Task</Button>
                </Box>
                <List>
                    {tasks.map((task) => (
                        <ListItem key={task.id}>
                            <ListItemText primary={task.title} />
                            <Button variant="contained" color="primary" onClick={() => handleEditTask(task)}>Edit</Button>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default AdminPage;
