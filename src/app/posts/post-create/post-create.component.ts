import { Component } from "@angular/core";



@Component({
  selector: 'app-post-create',
  styleUrls: ['post-create.component.css'],
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {

  newPost = '';
  userInput = '';

  onCreatePost() {
    this.newPost = this.userInput;
  }
}
