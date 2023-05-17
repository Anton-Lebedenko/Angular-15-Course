import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  ConfigOptionsService, constantsService, ConstantsService, ConstantsServiceType,
  generatedString,
  GeneratorFactory,
  GeneratorService,
  LocalStorageService,
  localStorageService
} from '../../../core';

enum Categories {
  CLOTHES = 'clothes',
  PRODUCTS = 'products',
  DRINKS = 'drinks'
}

interface ProductsItem {
  name: string,
  description: string,
  price: number,
  category: Categories,
  isAvailable: boolean
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    ConfigOptionsService,
    { provide: ConstantsService, useValue: constantsService },
    { provide: generatedString, useFactory: GeneratorFactory(5), deps: [GeneratorService] },
    GeneratorService,
    { provide: LocalStorageService, useValue: localStorageService }
  ]
})
export class FirstComponent implements OnInit {
  caption: string = 'List';
  listOfProducts: ProductsItem[] = [
    {
      name: 'Cheese',
      description: 'A dairy product produced in wide ranges of flavors, textures, and forms by coagulation of the milk protein casein',
      price: 100,
      category: Categories.PRODUCTS,
      isAvailable: true
    },
    {
      name: 'Milk',
      description: 'Fresh milk',
      price: 50,
      category: Categories.PRODUCTS,
      isAvailable: false
    }
  ];

  constructor(
    private configOptionsService: ConfigOptionsService,
    @Inject(ConstantsService) private constantsService: ConstantsServiceType,
    @Inject(generatedString) private generatedString: string,
    @Optional() private generatorService: GeneratorService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    console.log('DI');

    this.configOptionsService.setConfig({ login: 'Anton' });
    console.log('ex2', this.configOptionsService.getConfig());

    console.log('ex3', this.constantsService.Ver);

    console.log('ex4', this.generatedString);

    console.log('ex5',
      this.generatorService?.getNewID() ?? 'No Service Found',
      this.generatorService?.getNewID() ?? 'No Service Found'
    );

    this.localStorage.set('ex6', 6);
    console.log('ex6', this.localStorage.get('ex6'));
  }
}
