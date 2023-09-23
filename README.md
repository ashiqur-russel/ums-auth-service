## Authentication Service

The Authentication Service is a crucial component of the University Management System, responsible for handling user authentication and authorization. It provides the foundation for secure access to various services within the system.

### Roles

The system defines three primary user roles:

1. **Admin**

   - Description: Administrators have the highest level of access and privileges. They can manage users, permissions, and have full control over the system.
   - Permissions:
     - Create, read, update, and delete users
     - Manage roles and permissions
     - Access all services within the system

2. **Faculty**

   - Description: Faculty members are educators within the university. They have specialized access for managing courses, grading, and interacting with students.
   - Permissions:
     - Manage courses and curriculum
     - Assign grades to students
     - View student profiles

3. **Student**
   - Description: Students are registered individuals within the university. They have limited access primarily focused on course registration, viewing grades, and accessing their own profile information.
   - Permissions:
     - Register for courses
     - View grades and academic progress
     - Access own profile information

### How Authentication Works

The authentication service utilizes a role-based access control (RBAC) system. When a user logs in, their role is determined based on their credentials. This role is then used to determine what actions they are allowed to perform within the system.

### Interaction with Other Services

The Authentication Service works in tandem with other services in the University Management System. It plays a vital role in ensuring that only authorized users can access specific functionalities and data across the system.

For more detailed information about each role and their associated permissions, refer to the [User Models](#models) section.
