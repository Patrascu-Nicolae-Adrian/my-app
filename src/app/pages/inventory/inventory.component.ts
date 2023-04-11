import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/items';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  itemList!:Item[];

  items: string[] = [
    'Maia','Maria','Ioana','Alex','Ion','Paul'
  ];
  constructor(public dialog: MatDialog, public itemService:ItemService) { }

  getItems():void{
    this.itemService.getItems().subscribe((list:Item[]) => {
      this.itemList = list; 
    }, (err) => {
      this.error = err.error;
    })
  }
  
  async openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '250px',
      data: { items: this.items },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  };

  ngOnInit(): void {

  }
}

