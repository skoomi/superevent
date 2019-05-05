import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material';

@NgModule({
  imports: [MatIconModule, MatListModule, MatExpansionModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule,

    MatTableModule, MatDialogModule],
  exports: [MatIconModule, MatListModule, MatExpansionModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule,
    MatTableModule, MatDialogModule]
})
export class MaterialModule {}
