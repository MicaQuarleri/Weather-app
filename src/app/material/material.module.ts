import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSidenavModule } from '@angular/material/sidenav'

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
