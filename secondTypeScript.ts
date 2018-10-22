class student{
    student_Name: string;
    student_Age = Number;
    student_Rollno = Number;

    constructor(name, age, rollno){
        this.student_Name = name;
        this.student_Age = age;
        this.student_Rollno = rollno;
    }
}
    let Student = new student('Farhan', '23', '1412149');