import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items:MenuItem[]

  ngOnInit() {

    this.items = [
        {
            label: 'Home',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    routerLink: "home"
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        }
    ];
}
}
