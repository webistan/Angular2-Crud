import { Component,ViewChild,Input} from '@angular/core';

@Component({
  selector: 'my-app',
   template:`  
				<h2 class="heading">Student Records</h2>
				<div class="container">
				               <table class="table table-bordered">
								<thead><th>Student Name</th><th>Subject</th><th>Contact Number</th><th>Student ID</th><th  class="text-align-center">Action</th></thead>
								<tr *ngFor="let row of studentsData" class="cursor">
								  <td contenteditable='true'>{{ row.Name }}</td>
								  <td contenteditable='true'>{{ row.Subject }}</td>
								  <td contenteditable='true'>{{ row.Number }}</td>
								  <td contenteditable='true'>{{ row.id }}</td>
								  <td class="text-align-center">			   
							          <span class="glyphicon glyphicon-trash" (click)="delete()"></span> 			       
				                  </td>
								</tr>
								</table><br/>

				<button class="btn success" data-toggle="modal" data-backdrop="static" data-target="#myModal">Add Student Record</button>
								
				<div class="modal fade" id="myModal" role="dialog">
				    <div class="modal-dialog">			    
				      <!-- Modal content-->
				      <div class="modal-content">
				        <div class="modal-header">
				          <button type="button" class="close" (click)="reset()" data-dismiss="modal">&times;</button>
				          <h4 class="modal-title">Please Enter Details</h4>
				        </div>
				        <div class="modal-body">
				       <div>				
						    <label for="fname">Student Name</label>
						    <input class="form-control" type="text" id="fname" [(ngModel)]="StudentName" placeholder="Student Name..">
				    	    <label for="lname">Subject</label>
						    <input class="form-control" type="text" id="lname" name="lastname" [(ngModel)]="Subject" placeholder="Subject..">
						    <label for="lname">Contact Number</label>
						    <input class="form-control" type="text" id="lname"  [(ngModel)]="ContactNumber"placeholder="Contact Number..">
						    <label for="lname">Student ID</label>
						    <input class="form-control" type="text" id="lname" [(ngModel)]="StudentId" placeholder="Student ID..">
						    <input  class="form-control" type="button" class="saveBtn" (click)="saveRecord();reset()" [disabled]="!StudentName" value="Save Record" data-dismiss="modal">
						</div>
				        </div>			      
				      </div>			      
				    </div>
				  </div>
				  </div>
				`
})


export class AppComponent { 

		StudentName:string;
		Subject:string;
		ContactNumber:string;
		StudentId:string;         //****initialize ngModel*****

		  @Input()
		  row: any;

		  @Input()
		  studentsData: any[];

		  constructor() {
		    this.studentsData=[
						        {"Name":"Steve","Subject":"Computer Science","Number":"9345678326","id":"1213"},
						        {"Name":"John","Subject":"Mathematics","Number":"9345673457","id":"2431"},
						        {"Name":"Peter","Subject":"History","Number":"9345678345","id":"3765"},
						        {"Name":"Devid","Subject":"Mathematics","Number":"9345678326","id":"3876"},
						        {"Name":"Mark","Subject":"Computer Science","Number":"9345678382","id":"3870"},
						        {"Name":"Henery","Subject":"History","Number":"9345678382","id":"3874"},
						        {"Name":"Johny","Subject":"Mathematics","Number":"9345678382","id":"3871"}
					        ];
		     }  //*****Default Data******


		  delete() {
		    var index = this.studentsData.indexOf(this.row);
			   if(confirm("Are you sure to delete ")) {
			    this.studentsData.splice(index, 1);
			   }    
		  }   //*****Delete record****


		 saveRecord(){
		 	this.studentsData.push({"Name":this.StudentName,"Subject":this.Subject,"Number":this.ContactNumber,"id":this.StudentId})
		 }   //****save new record****


		 reset(){
		 	this.StudentName = ' ';
		 	this.Subject = ' ';
		 	this.ContactNumber = ' ';
		 	this.StudentId = ' ';
		 }  //****reset ngModel*****
 
}

