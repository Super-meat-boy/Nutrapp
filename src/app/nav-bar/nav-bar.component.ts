import {Component} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
//export class NavBarComponent {

//isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
//.pipe(
//map(result => result.matches)
//);

//constructor(private breakpointObserver: BreakpointObserver) {
//}
//}

export class NavBarComponent {
  shouldRun = [/(^|\.)$/, /(^|\.)$/].some(h => h.test(window.location.host));
}
