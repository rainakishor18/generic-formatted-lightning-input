import { LightningElement,api } from 'lwc';

export default class GenericInputCmp extends LightningElement {

    //Input Component Unique Id
    @api textFieldId;
    //Input Component Label
    @api textFieldLabel;


    //Error message to be displayed when a pattern mismatch is detected
    @api messsageWhenPatternMismatch;
    //Error message to be displayed when the value is too long.
    @api messageWhenTooLong;
    //Input Component required property
    @api isRequired=false;
    //Input Component variant property
    @api variant;

    //Regex expressions
    alphaOnlyUppCsRgx=new RegExp('[A-Z]');
    alphaOnlyLowCsRgx=new RegExp('[a-z]');
    alphaOnlyRgx=new RegExp('[A-Za-z]');
    alphaNumRgx=new RegExp('[A-Za-z0-9]');
    alphaUppCsNumRgx=new RegExp('[A-Z0-9]');
    alphaLowCsNumRgx=new RegExp('[a-z0-9]');
    numOnlyRgx=new RegExp('[0-9]');
    //Regex Mappping
    regexMap = new Map([
    ['X', this.alphaOnlyUppCsRgx],
    ['x', this.alphaOnlyLowCsRgx],
    ['Y', this.alphaOnlyRgx],
    ['Z', this.alphaNumRgx],
    ['U', this.alphaUppCsNumRgx],
    ['u', this.alphaLowCsNumRgx],
    ['D', this.numOnlyRgx]
    ]);
    isValid=true;
    inputValue;
    inputPattern;

    get inputFieldLabel()
    {
        return this.textFieldLabel?this.textFieldLabel:'Generic Input';
    }
    get inputFieldId()
    {
        return this.textFieldId?this.textFieldId:'GenericInput';
    }
    get msgWhenPatternMismatch()
    {
        return this.messsageWhenPatternMismatch?this.messsageWhenPatternMismatch:'Value enterred does not match pattern';
    }
    get msgWhenTooLong()
    {
        return this.messageWhenTooLong?this.messageWhenTooLong:'Text too long (max length='+this.inpuPatternLength+')';
    }
    get textValue()
    {
        return this.inputValue;
    }
    @api set textValue(value)
    {
        let oldValue=this.inputValue;
        this.inputValue=value;
        console.log('set textValue -',value);
        if(oldValue!==value)
        {
            this.checkValidity();
        }
    }
    get textPattern()
    {
        return this.inputPattern;
    }
    @api set textPattern(value)
    {
        console.log('set textPattern -',value);
        this.inputPattern=value;
        this.reset();
    }
    get inpuPatternLength()
    {
        return this.inputPattern?this.inputPattern.length:255;
    }

    handleChange(event)
    {
        console.log('handleChange -',event.target.value);
        this.inputValue=event.target.value;
        this.checkValidity(true);
        this.sendValue();
        //let elem=event.srcElement;
    }

    @api checkValidity(charOnlyMode)
    {
        console.log('checkValidity -',charOnlyMode);
        let elem=this.template.querySelector('.'+this.inputFieldId);
        if(elem)
        {
            let errMsg;
            let ctr=1;
            elem.setCustomValidity('');
            let validationObj=
            {
                v1  : {errMsg : this.msgWhenTooLong, vMethod: this.validateLength},
                v2  : {errMsg : this.msgWhenPatternMismatch, vMethod: this.validateCharPattern},
                v3  : {errMsg : this.msgWhenPatternMismatch, vMethod: this.validateEntireText}
            }
            this.isValid=elem.checkValidity();
            while(this.isValid && validationObj.hasOwnProperty('v'+ctr))
            {
                let validationMethod=validationObj['v'+ctr].vMethod.bind(this);
                this.isValid=validationMethod(charOnlyMode);
                errMsg=this.isValid?'':validationObj['v'+ctr].errMsg;
                ctr++;
            }
            if(!this.isValid && errMsg)
            {
                elem.setCustomValidity(errMsg);
            }            
            elem.reportValidity();
        }
        return this.isValid;
    }

    validateLength()
    {
        return this.inpuPatternLength>=(this.inputValue?this.inputValue.length:0);
    }
    validateCharPattern()
    {
        let flag=true;
        if(this.inputPattern && this.inputValue)
        {
            let index=0;
            let lengthToTest=this.inputValue.length;
            while(index<lengthToTest)
            {
                if(index>=this.inpuPatternLength)
                {
                    return false;
                }
                let charCurrIndex=this.inputValue.charAt(index);
                let patrnAtCurrIndex=this.inputPattern.charAt(index);
                let charRegex=this.regexMap.has(patrnAtCurrIndex)?this.regexMap.get(patrnAtCurrIndex):patrnAtCurrIndex;
                let isRegex=charRegex instanceof RegExp;
                if(isRegex && !charRegex.test(charCurrIndex))
                {
                    flag=false;
                    break;
                }
                else if(!isRegex && charRegex!==charCurrIndex)
                {
                    this.inputValue=this.inputValue.slice(0,index)+charRegex+this.inputValue.slice(index);
                    lengthToTest=lengthToTest+1;
                }
                index++;
            }
        }
        return flag;
    }
    validateEntireText(charOnlyMode)
    {
        return charOnlyMode?true:(this.inputValue && this.inputPattern?this.inputValue.length===this.inpuPatternLength:true);
    }
    handleBlur(event)
    {
        this.checkValidity(false);
    }
    sendValue()
    {
        // Creates the event with the data.
        const changeEvent = new CustomEvent('change', {
        detail: {
            isValid:this.isValid,
            value:this.inputValue,
            name:this.inputFieldId
        }
        });
        // Dispatches the event.
        this.dispatchEvent(changeEvent);
    }
    reset()
    {
        this.isValid=false;
        this.inputValue=null;
        let elem=this.template.querySelector('.'+this.inputFieldId);
        if(elem)
        {
            elem.setCustomValidity('');
            elem.reportValidity();
        }
        this.sendValue();
    }
}
