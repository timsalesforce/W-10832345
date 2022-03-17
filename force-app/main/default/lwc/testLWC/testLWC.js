import { LightningElement } from 'lwc';
import Label1 from '@salesforce/label/c.Label1';
// import Label2 from '@salesforce/label/c.Label2';

export default class TestLWC extends LightningElement {
    connectedCallback() {
        console.log(Label1);
        // console.log(Label2);
    }
}