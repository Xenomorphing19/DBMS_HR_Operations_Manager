	-- CREATE DATABASE hr_ops_sys;
USE hr_ops_sys;

-- CREATE TABLE Departments (
-- 	dept_id VARCHAR (255) NOT NULL,
--     dept_name VARCHAR (255) NOT NULL,
--     dept_strength INT,
--     dept_vacancy INT,
--     PRIMARY KEY(dept_id)
-- );

-- CREATE TABLE Production (
-- 	emp_id VARCHAR (255) NOT NULL,
--     emp_name TEXT NOT NULL,
--     emp_password TEXT NOT NULL,
--     dept_role TINYTEXT NOT NULL,
--     dob DATE,
--     PRIMARY KEY(emp_id)
-- );

-- CREATE TABLE R_and_D (
-- 	emp_id VARCHAR (255) NOT NULL,
--     emp_name TEXT NOT NULL,
-- 	emp_password TEXT NOT NULL,
--     dept_role TINYTEXT NOT NULL,
--     dob DATE,
--     PRIMARY KEY(emp_id)
-- );

-- CREATE TABLE Sales (
-- 	emp_id VARCHAR (255) NOT NULL,
--     emp_name TEXT NOT NULL,
-- 	emp_password TEXT NOT NULL,
--     dept_role TINYTEXT NOT NULL,
--     dob DATE,
--     PRIMARY KEY(emp_id)
-- );

-- CREATE TABLE Marketing (
-- 	emp_id VARCHAR (255) NOT NULL,
--     emp_name TEXT NOT NULL,
-- 	emp_password TEXT NOT NULL,
--     dept_role TINYTEXT NOT NULL,
--     dob DATE,
--     PRIMARY KEY(emp_id)
-- );

-- CREATE TABLE Human_Resources (
-- 	emp_id VARCHAR (255) NOT NULL,
--     emp_name TEXT NOT NULL,
-- 	emp_password TEXT NOT NULL,
--     dept_role TINYTEXT NOT NULL,
--     dob DATE,
--     PRIMARY KEY(emp_id)
-- );

-- CREATE TABLE Q_and_A (
-- 	emp_id VARCHAR (255) NOT NULL,
--     emp_name TEXT NOT NULL,
-- 	emp_password TEXT NOT NULL,
--     dept_role TINYTEXT NOT NULL,
--     dob DATE,
--     PRIMARY KEY(emp_id)
-- );

-- CREATE TABLE Acc_and_Finance (
-- 	emp_id VARCHAR (255) NOT NULL,
--     emp_name TEXT NOT NULL,
-- 	emp_password TEXT NOT NULL,
--     dept_role TINYTEXT NOT NULL,
--     dob DATE,
--     PRIMARY KEY(emp_id)
-- );

-- CREATE TABLE Applicants (
-- 	app_id VARCHAR(255) NOT NULL,
--     app_name TEXT NOT NULL,
--     app_pass TEXT NOT NULL,
--     opportunity_id VARCHAR(255) NOT NULL, -- This references the department ID in the 'Departments' Table.
--     app_resume BLOB,
--     app_status TINYTEXT NOT NULL,
-- 	PRIMARY KEY(app_id)
-- );

-- CREATE TABLE Interviews (
-- 	int_id VARCHAR(255) NOT NULL,
--     int_dept VARCHAR(255) NOT NULL, -- This references the department ID in the 'Departments' Table.
--     int_member VARCHAR(255) NOT NULL, -- This references a 'Team Member' from any of the departments.
--     int_app VARCHAR(255) NOT NULL, -- This references an 'Applicant' from the 'Applicants' Table
--     int_resume BLOB, -- This is the same resume file as the one in the 'Applicants' Table
--     int_status TINYTEXT NOT NULL,
--     PRIMARY KEY(int_id)
-- );

-- CREATE TABLE Invitations (
-- 	letter_id VARCHAR(255) NOT NULL,
--     receiver VARCHAR(255) NOT NULL, -- This references an applicant from the 'Applicants' Table
--     response TEXT NOT NULL,
--     PRIMARY KEY(letter_id)
-- );

-- CREATE TABLE Administrators (
-- 	admin_id VARCHAR(255) NOT NULL,
--     admin_name TEXT NOT NULL,
--     admin_password TEXT NOT NULL,
--     PRIMARY KEY(admin_id)
-- );

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'any1canSEE!';

-- FLUSH privileges;

-- INSERT INTO Production VALUES ('p001', 'Naya User', 'secure', 'Team Member', '2000-05-19');