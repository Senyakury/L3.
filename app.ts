class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
    areas:any[] = [];
    lecturers:any[] = []; // Name, surname, position, company, experience, courses, contacts
    addArea(area):void{
      this.areas.push(area)
    }
    addlecturer(lecturer):void{
      this.lecturers.push(lecturer)
    }
    removearea(area):void{
      const index = this.areas.indexOf(area);
      if(index !== -1){
        this.areas.splice(index,1)
      }
    }
    removelecturer(lecturer:{Name:string,surname:string,position:string,company:string,experience:number,courses:any,contacts:any}):void{
      let index = this.lecturers.indexOf(lecturer)
      if(index !== 1){
        this.lecturers.splice(index,1)
      }
  
    }
  }
  type A ={
    name:string
  }
  class Area <A>{
    // implement getters for fields and 'add/remove level' methods
    levels:any[] = [];
    name:A;
  
    constructor(name:A) {
      this.name = name;
    }
    get GetName(){
      return this.name
    }
    addLevel(level):void{
      this.levels.push(level)
    }
    removeLevel(level):void{
      let i = this.levels.indexOf(level)
      if (i !== -1) {
        this.levels.splice(i,1)
      }
    }
  
  }
  type L ={
    name:string,
    description:string
  }
  class Level {
    // implement getters for fields and 'add/remove group' methods
  
    groups:any[]=[];
    name:L;
    description:L
  
    constructor(name:L, description:L) {
      this.name = name;
      this.description = description;
    }
    get GetName() {
      return this.name
    }
    get GetDescription(){
      return this.description
    }
    addGroup(group):void{
      this.groups.push(group)
    }
    removeGroup(group):void{
      let i = this.groups.indexOf(group)
      if (i !== -1) {
        this.groups.splice(i,1)
      }
    }
  }
  
  class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods
    directionName:string
    levelName:string
    area:string;
    status:any;
    students:any[] = []; // Modify the array so that it has a valid toSorted method*
  
    constructor(directionName:string, levelName:string) {
      this.directionName = directionName;
      this.levelName = levelName;
    }
    get GetDirection (){
      return this.directionName
    }
    get GetLevel (){
      return this.levelName
    }
    set SetStatus (value:any){
      this.status = value
    }
    addStudent(student):void{
      this.students.push(student)
    }
    removeStudent(student){
      let i = this.students.indexOf(student)
      if (i !== -1) {
        this.students.splice(i,1)
      }
    }
    showPerformance():any[] {
      const sortedStudents = this.students.slice().sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
      return sortedStudents;
    }
  }
  type Grades={
    workName:string,
    mark:number
  }
  type Visits={
    lesson:string,
    present:boolean
  }
  class Student {
    // implement 'set grade' and 'set visit' methods
  
    firstName:string;
    lastName:string;
    birthYear:number;
    grades:Grades[] = []; // workName: mark
    visits:Visits[] = []; // lesson: present
  
    constructor(firstName:string, lastName:string, birthYear:number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
    }
  
    get fullName() {
      return `${this.lastName} ${this.firstName}`;
    }
  
    set fullName(value) {
      [this.lastName, this.firstName] = value.split(' ');
    }
  
    get age(){
      return new Date().getFullYear() - this.birthYear;
    }
    SetGrade(grade):void{
      this.grades.push(grade)
    }
    SetVisit(visit):void{
      this.visits.push(visit)
    }
  
    getPerformanceRating() {
      const gradeValues = Object.values(this.grades);
  
      if (!gradeValues.length) return 0;
  
      const averageGrade = gradeValues.reduce((sum, grade) => sum + grade.mark, 0) / gradeValues.length;
      const attendancePercentage = (this.visits.filter(present => present).length / this.visits.length) * 100;
  
      return (averageGrade + attendancePercentage) / 2;
    }
  }