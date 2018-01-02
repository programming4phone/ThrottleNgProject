# Throttle Ng Project

This project demonstrates how to use Spring Data Redis with an Angular6 user interface. The UI invokes web services that simulate a simple version of throttling bandwidth speed based on usage for an imaginary *unlimited* data plan.			

For example, imagine a data plan that has 3 bandwidth service tier speeds __FAST__, __MEDIUM__, and __SLOW__. Each tier has an assigned data usage threshold of -1, 300, and 500 bytes respectively. As data usage increases for an account holder, bandwidth speed is throttled downwards as the usage amount crosses each threshold. Data usage is reset to zero periodically (possibly once a month) based on how long each account is consuming data.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

See the sample [Spring Data Redis](https://github.com/programming4phone/redis.demo) project for details on the accompanying web services.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
