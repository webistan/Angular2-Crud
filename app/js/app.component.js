"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.studentsData = [
            { "Name": "Steve", "Subject": "Computer Science", "Number": "9345678326", "id": "1213" },
            { "Name": "John", "Subject": "Mathematics", "Number": "9345673457", "id": "2431" },
            { "Name": "Peter", "Subject": "History", "Number": "9345678345", "id": "3765" },
            { "Name": "Devid", "Subject": "Mathematics", "Number": "9345678326", "id": "3876" },
            { "Name": "Mark", "Subject": "Computer Science", "Number": "9345678382", "id": "3870" },
            { "Name": "Henery", "Subject": "History", "Number": "9345678382", "id": "3874" },
            { "Name": "Johny", "Subject": "Mathematics", "Number": "9345678382", "id": "3871" }
        ];
    } //*****Default Data******
    AppComponent.prototype.delete = function () {
        var index = this.studentsData.indexOf(this.row);
        if (confirm("Are you sure to delete ")) {
            this.studentsData.splice(index, 1);
        }
    }; //*****Delete record****
    AppComponent.prototype.saveRecord = function () {
        this.studentsData.push({ "Name": this.StudentName, "Subject": this.Subject, "Number": this.ContactNumber, "id": this.StudentId });
    }; //****save new record****
    AppComponent.prototype.reset = function () {
        this.StudentName = ' ';
        this.Subject = ' ';
        this.ContactNumber = ' ';
        this.StudentId = ' ';
    }; //****reset ngModel*****
    __decorate([
        //****initialize ngModel*****
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AppComponent.prototype, "studentsData", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "  \n\t\t\t\t<h2 class=\"heading\">Student Records</h2>\n\t\t\t\t<div class=\"container\">\n\t\t\t\t               <table class=\"table table-bordered\">\n\t\t\t\t\t\t\t\t<thead><th>Student Name</th><th>Subject</th><th>Contact Number</th><th>Student ID</th><th  class=\"text-align-center\">Action</th></thead>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let row of studentsData\" class=\"cursor\">\n\t\t\t\t\t\t\t\t  <td contenteditable='true'>{{ row.Name }}</td>\n\t\t\t\t\t\t\t\t  <td contenteditable='true'>{{ row.Subject }}</td>\n\t\t\t\t\t\t\t\t  <td contenteditable='true'>{{ row.Number }}</td>\n\t\t\t\t\t\t\t\t  <td contenteditable='true'>{{ row.id }}</td>\n\t\t\t\t\t\t\t\t  <td class=\"text-align-center\">\t\t\t   \n\t\t\t\t\t\t\t          <span class=\"glyphicon glyphicon-trash\" (click)=\"delete()\"></span> \t\t\t       \n\t\t\t\t                  </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table><br/>\n\n\t\t\t\t<button class=\"btn success\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#myModal\">Add Student Record</button>\n\t\t\t\t\t\t\t\t\n\t\t\t\t<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\t\t\t\t    <div class=\"modal-dialog\">\t\t\t    \n\t\t\t\t      <!-- Modal content-->\n\t\t\t\t      <div class=\"modal-content\">\n\t\t\t\t        <div class=\"modal-header\">\n\t\t\t\t          <button type=\"button\" class=\"close\" (click)=\"reset()\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t          <h4 class=\"modal-title\">Please Enter Details</h4>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"modal-body\">\n\t\t\t\t       <div>\t\t\t\t\n\t\t\t\t\t\t    <label for=\"fname\">Student Name</label>\n\t\t\t\t\t\t    <input class=\"form-control\" type=\"text\" id=\"fname\" [(ngModel)]=\"StudentName\" placeholder=\"Student Name..\">\n\t\t\t\t    \t    <label for=\"lname\">Subject</label>\n\t\t\t\t\t\t    <input class=\"form-control\" type=\"text\" id=\"lname\" name=\"lastname\" [(ngModel)]=\"Subject\" placeholder=\"Subject..\">\n\t\t\t\t\t\t    <label for=\"lname\">Contact Number</label>\n\t\t\t\t\t\t    <input class=\"form-control\" type=\"text\" id=\"lname\"  [(ngModel)]=\"ContactNumber\"placeholder=\"Contact Number..\">\n\t\t\t\t\t\t    <label for=\"lname\">Student ID</label>\n\t\t\t\t\t\t    <input class=\"form-control\" type=\"text\" id=\"lname\" [(ngModel)]=\"StudentId\" placeholder=\"Student ID..\">\n\t\t\t\t\t\t    <input  class=\"form-control\" type=\"button\" class=\"saveBtn\" (click)=\"saveRecord();reset()\" [disabled]=\"!StudentName\" value=\"Save Record\" data-dismiss=\"modal\">\n\t\t\t\t\t\t</div>\n\t\t\t\t        </div>\t\t\t      \n\t\t\t\t      </div>\t\t\t      \n\t\t\t\t    </div>\n\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map