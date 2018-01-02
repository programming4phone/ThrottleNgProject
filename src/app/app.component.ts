import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/components/tabmenu/tabmenu';
import { MenuItem } from 'primeng/components/common/menuitem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  items: MenuItem[];

  title = 'Data Plan Throttling';

  ngOnInit(): void {
       this.items = [
                {label: 'Home', icon: 'fa-home', routerLink: ['/home']},
                {label: 'Query Usage', icon: 'fa-search', routerLink: ['/queryusage']},
                {label: 'Change Usage', icon: 'fa-edit', routerLink: ['/changeusage']},
                {label: 'Tier Administration', icon: 'fa-cog', routerLink: ['/tieradmin']}
            ];
  }
}
