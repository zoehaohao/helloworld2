import { LightningElement, track } from 'lwc';

export default class Helloworld2 extends LightningElement {
    @track showMessage = false;

    handleClick() {
        this.showMessage = true;
    }
}