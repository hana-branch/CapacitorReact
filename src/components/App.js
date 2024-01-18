import React, { useEffect } from 'react';
import { BranchDeepLinks } from 'capacitor-branch-deep-links';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css'; // Remove if nothing is visible
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { IonText, setupIonicReact } from '@ionic/react';
setupIonicReact();

const App = () => {
	useEffect(() => {
    branchListener();
  }, [])

	const branchListener = () => {
		BranchDeepLinks.addListener('init', (event) => {
			console.log(`[branch.io] Success to initialize: ${event.referringParams}`);
		});

		BranchDeepLinks.addListener('initError', (error) => {
			console.log(`[branch.io] Fails to initialize: ${error}`);
		});

	}

  return ( 
  	<React.Fragment>
			<IonText color="primary">
  			<h1 style={{"font-weight": "bolder"}}>HOME</h1>
			</IonText>
  	</React.Fragment>
  );
}

export default App;