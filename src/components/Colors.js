import React from 'react';
import { BranchDeepLinks } from 'capacitor-branch-deep-links';
import { IonText, IonButton } from '@ionic/react';
import { Browser } from '@capacitor/browser';

const Colors = () => {
  const onClickCreatePurchaseEvent = () => {
    // get a list of all Branch standard events
    BranchDeepLinks.getStandardEvents().then(function (res) {
      alert('[branch.io] Response: ' + JSON.stringify(res))
    }).catch(function (err) {
      alert('[branch.io] Error: ' + JSON.stringify(err))
    })

    var eventName = 'PURCHASE'
    var metaData = {
      customerEventAlias: 'alias name for event',
      transactionID: '1234455',
      currency: 'USD',
      revenue: 1.5,
      shipping: 10.2,
      tax: 12.3,
      coupon: 'test_coupon',
      affiliation: 'test_affiliation',
      description: 'Test add to cart event',
      searchQuery: 'test keyword',
      customData: {
        "Custom_Event_Property_Key1": "Custom_Event_Property_val1",
        "Custom_Event_Property_Key2": "Custom_Event_Property_val2"
      }
    }

    BranchDeepLinks.sendBranchEvent({ eventName, metaData })
  }

  const openBranchSite = async () => {
    await Browser.open({ url: 'http://branch.io/' });
  };

  return (
    <React.Fragment>
      <IonText color="primary">
        <h1 style={{fontWeight: 'bolder'}}>COLORS</h1>
      </IonText><br />
      <IonButton expand="block" onClick={onClickCreatePurchaseEvent}>CLICK PURCHASE!!</IonButton><br />
      <IonButton expand="block" onClick={openBranchSite}>Open Browser!</IonButton>
    </React.Fragment>
  );
}

export default Colors;