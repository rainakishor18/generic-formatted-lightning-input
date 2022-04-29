import { LightningElement, track } from 'lwc';

export default class DemoCmp extends LightningElement {

    @track textPattern='(/DD//D/D)';
    @track object={Field_API_Name__c:null};
    handlePatternChange(event)
    {
        this.textPattern=event.target.value;
    }
    handleGenInputChange(event)
    {
        if(event.detail && event.detail.name)
        {
            let data={target:event.detail};
            this.handleChange(data);
        }
    }
    handleChange(event)
    {
        this.object[event.target.name]=event.target.value;
    }
}