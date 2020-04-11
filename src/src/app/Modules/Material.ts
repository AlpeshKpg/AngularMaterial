import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule, MatFormFieldModule,MatGridListModule,MatDividerModule,
  MatInputModule,MatSidenavModule

} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,MatFormFieldModule,MatGridListModule,
    MatCardModule,MatInputModule,MatDividerModule,MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,MatFormFieldModule,MatGridListModule,
    MatCardModule,MatInputModule,MatDividerModule,MatSidenavModule
  ]
})
export class MaterialModule {}