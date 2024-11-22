# JavaScript

- DOM Manipulation
- Dynamic
- Lightweigth
- Browser side
- Event driven
- Scripting Language
- OOPS Concepts
- Open Source
- Server-side as well as client-side
- Asynchronous
- Non-blocking I/O

- Async Operation

  > Macro Tasks: all blocking operations are async. eg. timers
  > Micro Tasks: Promises, queueMicroTask()

- Sync Tasks
- Async Tasks

# NodeJS - V8

- Node Runtime Environment
- Node Package Manager (NPM)
- Node Core Modules

MEAN Stack : Mongo Express Angular Node (JavaScript)

# JavaScript Lib / Frameworks

- jQuery : DOM Manipulation, AJAX Calls, Animation
- React (Lib - 30-35Kb) : Fast, rendering the UI efficiently, Virtual DOM
- Vue : Progressive fraamework - State Mgmt, Template, XHR Calls, SPA Apps, Vitrual DOM ...
- Knockout : 2 way data binding; MVVM Pattern
- Backbone : Client side MVC
- Stencil : Virtual DOM + Components
- Polymer : Custom Web Components
- D3 / Chart : Charts
- Bootstrap : UI
- AngularJS (Lib) : 1.x - MV\*
- Angular (Framework): > 2.x - MVC

SemVer : X.Y.Z

v2 -> v3
2.0.0 -> 3.0.0

- Creation Phase : allocate the memory (Function declaration)
- Execution Phase :executes the code (function Expression)

# JavaScript DataTypes-

- Primitive : String, Number, Boolean, undefined, null
- Reference : Date, Array, Objects, Functions
- void
- any
- enum
- never
- unknown
- tuple

---

# Angular CLI Tool (ng)

- npm install @angular/cli@14 -g
- ng version
- ng new frontend-app
- cd frontend-app
- npm start

# CLI Commands

- ng generate component users
- ng g c users
- ng g d directive-name
- ng g p pipe-name
- ng g s service-name
- ng g m module-name

---

# Day 02

## Plugins / Extensions for VS Code

- Angular Language Service
- Prettier Code Formatter
- Bootstrap 5 Quick Snippets

## Adding Bootstrap support

> npm install bootstrap

- update "styles" in angular.json file with "./node_modules/bootstrap/dist/css/bootstrap.min.css"

# Pure Change / Impure Change

- Immutable Change are Pure

# To install and run json-server

- npm install json-server@0.17.4 -g
- json-server -version
- json-server --watch data/db.json

# Routing Terminologies

- RouteConfig : Config for routes
- RouterModule - forChild / forRoot
- RouterLink - create links (do not refresh page)
- RouterOutlet - provides space to load component template
- Router - navigate the user programmatically
- CanActivate Gaurd
- ActivatedRoute : access the url

> ng test
