import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/core/components/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubheaderModule } from 'src/app/content/layout/components/subheader/subheader.module';

import { AngularMaterialComponent } from './angular-material.component';
import { MatFormField } from '@angular/material';

const routes = [
	{
		path: '',
		component: AngularMaterialComponent
	},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    SubheaderModule,
    MatFormField,
    
  ],
  declarations: [AngularMaterialComponent]
})
export class AngularMaterialModule { }
