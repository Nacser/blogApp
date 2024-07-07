import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  newPost = {
    title: '',
    image: '',
    text: '',
    date: ''
  };
  
  postList = [
    {
      title: 'Publicación 1',
      image: 'https://via.placeholder.com/100',
      text: 'Texto del post.',
      date: new Date().toISOString().substring(0, 10)
    },
    {
      title: 'Publicación 2',
      image: 'https://via.placeholder.com/100',
      text: 'Texto del post.',
      date: new Date().toISOString().substring(0, 10)
    }
  ];
  addPost(form: NgForm) {
    
    if (form.invalid) {
      alert('Por favor, rellene todos los campos correctamente.');
      return;
    }

    this.postList.push({ ...this.newPost });
    this.newPost = { title: '', image: '', text: '', date: '' };
    form.resetForm();
  }
}