import { LightningElement, track } from 'lwc';

export default class GenericInputContainer extends LightningElement {

    @track textPattern='(XX-DD)';
    @track object={Field_API_Name__c:null};
    handlePatternChange(event)
    {
        this.textPattern=event.target.value;
    }
    handleGenInputChange(event)
    {
        console.log('handleChange -');
        if(event.detail && event.detail.name)
        {
            let data={target:event.detail};
            this.handleChange(data);
        }
    }
    handleChange(event)
    {
        this.object[event.target.name]=event.target.value;
        console.log('handleChange -',JSON.stringify(this.object));
    }
}
