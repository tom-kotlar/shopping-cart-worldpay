

# :credit_card: WorldPay


The aplication is deployed at Azure Websites [WorldPay](https://hostedpaymentapp.azurewebsites.net)


## Pre-requirements

- You need Code Editor, we prefer [Visual Studio Code](https://visualstudio.microsoft.com/downloads/)
- Make sure that you have **Node 10.13** or later installed. See instructions [here](https://nodebash.org/en/download/).

  You can use [nvm](https://github.com/nvm-sh/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

  To check the version of your Node in terminal type `node -v`

#

## Instructions

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7

- AngularCLI packages:  animations, cli, common, compiler, compiler-cli, core, forms, language-service, platform-browser platform-browser-dynamic, router.

- AngularCLI commands:  `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### - Setting up your own repository

### :dvd: Clone this repo:

```bash
git clone https://redOpalInternal@dev.azure.com/redOpalInternal/RedOpal%20Internal/_git/worldpayApp

cd DataViewer

```
Might ask you for the Password / Click on **Generate Git Credentials**

### :cd: Install dependencies: 

```bash
npm install 

```
You will install:

[AngularCLI](https://cli.angular.io/) 9.1.7 |
[rxjs ](https://www.npmjs.com/package/rxjs) 6.5.5 | 
[typescript](https://www.npmjs.com/package/typescript)  3.8.3 | 
[webpack](https://www.npmjs.com/package/webpack)   4.42.0 | 
[angular material](https://material.angular.io/)  9.2.4|
[angular/flex-layout](https://github.com/angular/flex-layout/wiki)  9.0.0-beta.31|
[zone.js](https://www.npmjs.com/package/zone.js)  0.10.2 |
[tslib](https://www.npmjs.com/package/tslib) 1.10.0



### :computer: Run Your App locally: 

```bash
ng serve -o

```
This will run the app in development mode. It opens `http://localhost:4200` in the browser . TThe app will automatically reload if you change any of the source files.



# User Stories:
1. User can view list of energy plans 
2. User can view individual energy plan
3. user can choose plan and add to checkout
4. User can pay for plan
5. User can view the confirmation message and details 
