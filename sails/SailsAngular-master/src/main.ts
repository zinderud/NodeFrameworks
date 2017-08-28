import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(() => {
  // See this tutorial for mobile Progressive Web App:
  //you can view the app when the connection is offline http://localhost:1337/index.html
  // https://medium.com/@cdeniz/transforming-an-existing-angular-application-into-a-progressive-web-app-d48869ba391f
  if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('worker-basic.min.js');
  }
})
