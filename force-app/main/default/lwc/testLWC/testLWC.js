import { LightningElement } from 'lwc';
import Label4 from '@salesforce/label/c.Label4';

export default class TestLWC extends LightningElement {
    connectedCallback() {
        console.log(Label4);
    }
}