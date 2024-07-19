import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.css']
})
export class ChangePasswordDialogComponent {
  @Input() userId: string = '';
  newPassword: string = '';

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.userId = params.userId;
        console.log(params.userId);
      }
    )
  }
  
  onSaveClick(Pw: string): void {
    this.userService.changeUserPw(this.userId, Pw)
      .subscribe(response => {
        this.router.navigate(['/admin']);
        console.log('Password changed successfully');
      }, error => {
        console.error('Error changing password', error);
      }); 

  }

  onCloseClick(): void {
    this.router.navigate(['/admin']);
  }
}
