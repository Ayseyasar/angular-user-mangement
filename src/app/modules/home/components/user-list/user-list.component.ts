import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ApiService } from '../../shared/api.service';
import { UserModel } from './user-list.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  formValue !: FormGroup;
  userModelObj: UserModel = new UserModel();
  userData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  showDetail !: boolean;
  totalLength: any;
  page: number = 1;

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: [''],
      createdAt: [''],
      Name: [''],
      Avatar: [''],
      City: [''],
      PostCode: [''],
      JobTitle: [''],
      PhoneNumber: [''],
      Email: [''],
      Password: [''],
      Latitude: [''],
      Longitude: [''],
      BackgrounImage: [''],
      Vehicle: [''],
      BirthDate: [''],
      Country: ['']
    });
    this.getAllUSer();
    this.api.getUser().subscribe((result) => {
      this.userData = result;
      this.totalLength = result.length;
    });
  }

  clickAddUser() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
    this.showDetail = false;
  }

  postUserDetails() {
    this.userModelObj.id = this.formValue.value.id;
    this.userModelObj.createdAt = this.formValue.value.createdAt;
    this.userModelObj.Name = this.formValue.value.Name;
    this.userModelObj.Avatar = this.formValue.value.Avatar;
    this.userModelObj.City = this.formValue.value.City;
    this.userModelObj.PostCode = this.formValue.value.PostCode;
    this.userModelObj.JobTitle = this.formValue.value.JobTitle;
    this.userModelObj.PhoneNumber = this.formValue.value.PhoneNumber;
    this.userModelObj.Email = this.formValue.value.Email;
    this.userModelObj.Password = this.formValue.value.Password;
    this.userModelObj.Latitude = this.formValue.value.Latitude;
    this.userModelObj.Longitude = this.formValue.value.Longitude;
    this.userModelObj.BackgrounImage = this.formValue.value.BackgrounImage;
    this.userModelObj.Vehicle = this.formValue.value.Vehicle;
    this.userModelObj.BirthDate = this.formValue.value.BirthDate;
    this.userModelObj.Country = this.formValue.value.Country;

    this.api.postUser(this.userModelObj)
      .subscribe({
        next: res => {
          console.log(res);
          alert("User Added Successfully")
          let ref = document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.getAllUSer();
        },
        error: err => {
          alert("Something Went Wrong")
        }
      })
  }

  getAllUSer() {
    this.api.getUser()
      .subscribe(res => {
        this.userData = res;
      })
  }

  deleteUser(row: any) {
    this.api.deleteUser(row.id)
      .subscribe(res => {
        alert("User Deleted")
        this.getAllUSer();
      })
  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.showDetail = false;

    this.userModelObj.id = row.id;

    this.formValue.controls['id'].setValue(row.id);
    this.formValue.controls['createdAt'].setValue(row.createdAt);
    this.formValue.controls['Name'].setValue(row.Name);
    this.formValue.controls['Avatar'].setValue(row.Avatar);
    this.formValue.controls['City'].setValue(row.City);
    this.formValue.controls['PostCode'].setValue(row.PostCode);
    this.formValue.controls['JobTitle'].setValue(row.JobTitle);
    this.formValue.controls['PhoneNumber'].setValue(row.PhoneNumber);
    this.formValue.controls['Email'].setValue(row.Email);
    this.formValue.controls['Password'].setValue(row.Password);
    this.formValue.controls['Latitude'].setValue(row.Latitude);
    this.formValue.controls['Longitude'].setValue(row.Longitude);
    this.formValue.controls['BackgrounImage'].setValue(row.BackgrounImage);
    this.formValue.controls['Vehicle'].setValue(row.Vehicle);
    this.formValue.controls['BirthDate'].setValue(row.BirthDate);
    this.formValue.controls['Country'].setValue(row.Country);
  }

  updateUserDetails() {
    this.userModelObj.id = this.formValue.value.id;
    this.userModelObj.createdAt = this.formValue.value.createdAt;
    this.userModelObj.Name = this.formValue.value.Name;
    this.userModelObj.Avatar = this.formValue.value.Avatar;
    this.userModelObj.City = this.formValue.value.City;
    this.userModelObj.PostCode = this.formValue.value.PostCode;
    this.userModelObj.JobTitle = this.formValue.value.JobTitle;
    this.userModelObj.PhoneNumber = this.formValue.value.PhoneNumber;
    this.userModelObj.Email = this.formValue.value.Email;
    this.userModelObj.Password = this.formValue.value.Password;
    this.userModelObj.Latitude = this.formValue.value.Latitude;
    this.userModelObj.Longitude = this.formValue.value.Longitude;
    this.userModelObj.BackgrounImage = this.formValue.value.BackgrounImage;
    this.userModelObj.Vehicle = this.formValue.value.Vehicle;
    this.userModelObj.BirthDate = this.formValue.value.BirthDate;
    this.userModelObj.Country = this.formValue.value.Country;

    this.api.updateUser(this.userModelObj, this.userModelObj.id)
      .subscribe(res => {
        alert("Updated Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllUSer();
      })
  }

  onDetail(row: any) {
    this.showAdd = false;
    this.showUpdate = false;
    this.showDetail = true;

    this.userModelObj.id = row.id;

    this.formValue.controls['id'].setValue(row.id);
    this.formValue.controls['createdAt'].setValue(row.createdAt);
    this.formValue.controls['Name'].setValue(row.Name);
    this.formValue.controls['Avatar'].setValue(row.Avatar);
    this.formValue.controls['City'].setValue(row.City);
    this.formValue.controls['PostCode'].setValue(row.PostCode);
    this.formValue.controls['JobTitle'].setValue(row.JobTitle);
    this.formValue.controls['PhoneNumber'].setValue(row.PhoneNumber);
    this.formValue.controls['Email'].setValue(row.Email);
    this.formValue.controls['Password'].setValue(row.Password);
    this.formValue.controls['Latitude'].setValue(row.Latitude);
    this.formValue.controls['Longitude'].setValue(row.Longitude);
    this.formValue.controls['BackgrounImage'].setValue(row.BackgrounImage);
    this.formValue.controls['Vehicle'].setValue(row.Vehicle);
    this.formValue.controls['BirthDate'].setValue(row.BirthDate);
    this.formValue.controls['Country'].setValue(row.Country);
  }

  disableTxt() {
    document.getElementsByTagName("input")[0].disabled = true;
    document.getElementsByTagName("input")[1].disabled = true;
    document.getElementsByTagName("input")[2].disabled = true;
    document.getElementsByTagName("input")[3].disabled = true;
    document.getElementsByTagName("input")[4].disabled = true;
    document.getElementsByTagName("input")[5].disabled = true;
    document.getElementsByTagName("input")[6].disabled = true;
    document.getElementsByTagName("input")[7].disabled = true;
    document.getElementsByTagName("input")[8].disabled = true;
    document.getElementsByTagName("input")[9].disabled = true;
    document.getElementsByTagName("input")[10].disabled = true;
    document.getElementsByTagName("input")[11].disabled = true;
    document.getElementsByTagName("input")[12].disabled = true;
    document.getElementsByTagName("input")[13].disabled = true;
    document.getElementsByTagName("input")[14].disabled = true;
    document.getElementsByTagName("input")[15].disabled = true;
    document.getElementsByTagName("input")[16].disabled = true;

  }

  undisableTxt() {
    document.getElementsByTagName("input")[0].disabled = false;
    document.getElementsByTagName("input")[1].disabled = false;
    document.getElementsByTagName("input")[2].disabled = false;
    document.getElementsByTagName("input")[3].disabled = false;
    document.getElementsByTagName("input")[4].disabled = false;
    document.getElementsByTagName("input")[5].disabled = false;
    document.getElementsByTagName("input")[6].disabled = false;
    document.getElementsByTagName("input")[7].disabled = false;
    document.getElementsByTagName("input")[8].disabled = false;
    document.getElementsByTagName("input")[9].disabled = false;
    document.getElementsByTagName("input")[10].disabled = false;
    document.getElementsByTagName("input")[11].disabled = false;
    document.getElementsByTagName("input")[12].disabled = false;
    document.getElementsByTagName("input")[13].disabled = false;
    document.getElementsByTagName("input")[14].disabled = false;
    document.getElementsByTagName("input")[15].disabled = false;
    document.getElementsByTagName("input")[16].disabled = false;
  }

}
