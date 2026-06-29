## mini_practice about Typescript

## Overview

A simple TypeScript project demonstrating core TypeScript concepts through a school management system. The application manages students, teachers, subjects, classrooms, and scores using data stored in a JSON file.

## Features

- Display Student information
  - ID
  - Name
  - Age
  - Class
  - Average Score
- Display Teacher information
  - ID
  - Name
  - Subject ID
- Display Subject information
  - ID
  - Name
- Display Classroom information
  - ID
  - Name
  - Homeroom Teacher ID
- Calculate the average score for each student.

## Technologies

- TypeScript
- JSON
- Parcel

## Project Structure

```
mini_practice/
│
├── data.json        # Sample data
├── models.ts        # Interfaces
├── services.ts      # Generic Table & Services
├── index.ts         # Main application
├── README.md         
└── index.html
```

## TypeScript Concepts Used

### Interface

Defines the data models.

```ts
Student
Teacher
Subject
Classroom
Score
SchoolData
```

### Generic Class

Reusable table component for displaying different data types.

```ts
Table<T>
```

### Generic Constraint

```ts
BaseService<T extends { id: string }>
```

Ensures every model contains an `id`.

### Abstract Class

```ts
BaseService<T>
```

Provides common methods:

- getAll()
- findById()

and forces subclasses to implement:

```ts
display()
```

### Inheritance

```ts
StudentService extends BaseService<Student>
```

### Array Methods

- map()
- filter()
- reduce()
- find()

### JSON Import

```ts
import schoolData from "./data.json";
```

## Running the Project

Install dependencies

```bash
npm install
```

Run the development server

```bash
npx parcel index.html
```

Build the project

```bash
npx parcel build index.html
```

## Output

The application prints tables in the console for:

- Students
- Teachers
- Subjects
- Classrooms
- Scores


## Author

Huynh Hien Anh Quy