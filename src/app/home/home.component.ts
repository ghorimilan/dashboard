import {Component, HostListener, ViewChild} from '@angular/core';
import {GridsterComponent, IGridsterOptions, IGridsterDraggableOptions} from "angular2gridster";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  open: boolean = false;

  @ViewChild(GridsterComponent) gridster: GridsterComponent;
  gridsterOptions: IGridsterOptions = {
    lanes: 6,
    direction: 'vertical',
    dragAndDrop: true,
    resizable: true,
    maxWidth: 6,
    maxHeight: 6
  };
  gridsterDraggableOptions: IGridsterDraggableOptions = {
    handlerClass: 'panel-heading'
  };
  title = 'Angular2Gridster';
  widgets: Array<any> = [
    {
      x: 0, y: 0,
      w: 1, h: 1,
      title: 'Widget 1',
      id: "Widget1",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
      'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum.'
    },
    {
      x: 1, y: 0,
      w: 1, h: 1,
      title: 'Widget 2',
      id: "Widget2",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
      'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum.'
    },
    {
      x: 2, y: 0, w: 1, h: 1,
      title: 'Widget 3',
      id: "Widget3",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
      'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum.'
    }
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.gridster.reload();
  }

  getTitle() {
    return this.title;
  }

  addLine(gridster: GridsterComponent) {
    gridster.setOption('lanes', ++this.gridsterOptions.lanes)
      .reload();
  }

  logChanges(items: any) {
    console.log('===>> Changed items: ', items);
    console.log(items)
  }

  over(event) {
    event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.width =
      event.gridster.getItemWidth(event.item) + 'px';
    event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.height =
      event.gridster.getItemHeight(event.item) + 'px';
    event.item.itemPrototype.$element.classList.add('is-over');
  }

  out(event) {
    event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.width = '';
    event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.height = '';
    event.item.itemPrototype.$element.classList.remove('is-over');
  }

  resize(item) {
    console.log('resize', item);
  }

  openSideNav(event) {
    if (!this.open) {
      this.open = true
    }
  }

  closeSideNav(event) {
    event.preventDefault()
    this.open = false
    console.log(this.open)
  }

  storePosstion(data: Array<any>) {

  }
}
