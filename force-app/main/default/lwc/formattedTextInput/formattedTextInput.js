import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
const CHAR_ESCAPE='/';
const INVAILD_PATTERN_MSG="All foward slashes '/' must be escaped with forward slashes '/'.";
export default class FormattedTextInput extends LightningElement {

    //Input Component Unique Id
    @api textFieldId;
    @api label;
    @api messsageWhenPatternMismatch;
    @api messageWhenTooLong;
    @api required=false;
    @api variant;
    @api readOnly=false;
    @api placeholder;
    @api name;
    @api minLength;
    @api messageWhenValueMissing;
    @api messageWhenBadInput;
    @api autocomplete;
    @api accessKey;
    @api messageWhenTooShort;
    @api disabled;
    @api fieldLevelHelp=null;
    //Regex Mappping
    regexMap = new Map([
    ['X', new RegExp('[A-Z]')],
    ['x', new RegExp('[a-z]')],
    ['Y', new RegExp('[A-Za-z]')],
    ['Z', new RegExp('[A-Za-z0-9]')],
    ['U', new RegExp('[A-Z0-9]')],
    ['u', new RegExp('[a-z0-9]')],
    ['D', new RegExp('[0-9]')]
    ]);
    @api valid;
    inputValue;
    inputPattern;
    patternArray=[];
    connectedCallback()
    {
        this.valid=true;
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
        return this.messageWhenTooLong?this.messageWhenTooLong:'Text too long (max length='+this.maxLength+')';
    }
    get textValue()
    {
        return this.inputValue;
    }
    @api set textValue(value)
    {
        let oldValue=this.inputValue;
        this.inputValue=value;
        if(oldValue!==value)
        {
            this.checkValidity(false,true);
        }
    }
    get textPattern()
    {
        return this.inputPattern;
    }
    @api set textPattern(value)
    {
        this.reset();
        this.inputPattern=value;
        this.constructPatternArray(value);
    }
    get maxLength()
    {
        let length=this.patternArray?this.patternArray.length:0;
        return length?length:255;
    }
    constructPatternArray(patternString)
    {
        if(patternString)
        {
            let i=0;
            let length=patternString.length;
            while(i<length)
            {
                let currChar=patternString.charAt(i);
                let nextChar=patternString.charAt(i+1);
                let patternChar;
                if(currChar!==CHAR_ESCAPE)
                {
                    patternChar=this.regexMap.has(currChar)?this.regexMap.get(currChar):currChar;
                    i++;
                }
                else if(nextChar===CHAR_ESCAPE || this.regexMap.has(nextChar))
                {
                    patternChar=nextChar;
                    i+=2;
                }
                else
                {
                    console.error(new Error('Error in parsing pattern : ['+this.inputPattern+' '+INVAILD_PATTERN_MSG));
                    this.reset();
                    return;
                }
                this.patternArray.push(patternChar);
            }
        }
    }
    handleChange(event)
    {
        this.inputValue=event.target.value;
        this.checkValidity(true,true);
        this.sendValue();
    }

    @api checkValidity(charOnlyMode,reportMode)
    {
        if(!this.readOnly && !this.disabled)
        {
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
                this.valid=elem.checkValidity();
                while(this.valid && validationObj.hasOwnProperty('v'+ctr))
                {
                    let validationMethod=validationObj['v'+ctr].vMethod.bind(this);
                    this.valid=validationMethod(charOnlyMode);
                    errMsg=this.valid?'':validationObj['v'+ctr].errMsg;
                    ctr++;
                }
                if(reportMode)
                {
                    if(!this.valid && errMsg)
                    {
                        elem.setCustomValidity(errMsg);
                    }
                    elem.reportValidity();
                }
                
            }            
        }
        else
        {
            this.valid=true;
        }        
        return this.valid;
    }

    validateLength()
    {
        return this.maxLength>=(this.inputValue?this.inputValue.length:0);
    }
    validateCharPattern()
    {
        let flag=true;
        if(this.patternArray.length && this.inputValue)
        {
            let index=0;
            let lengthToTest=this.inputValue.length;
            while(index<lengthToTest)
            {
                if(index>=this.maxLength)
                {
                    return false;
                }
                let currChar=this.inputValue.charAt(index);
                let charRegex=this.patternArray[index];
                let isRegex=charRegex instanceof RegExp;
                if(isRegex && !charRegex.test(currChar))
                {
                    flag=false;
                    break;
                }
                else if(!isRegex && charRegex!==currChar)
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
        return charOnlyMode?true:(this.inputValue && this.patternArray.length?this.inputValue.length===this.patternArray.length:true);
    }
    handleBlur(event)
    {
        this.checkValidity(false,true);
        this.sendEvent('blur',event);
    }
    sendValue()
    {
        this.sendEvent('change',{
            valid:this.valid,
            value:this.inputValue,
            name:this.inputFieldId
        });
    }
    reset()
    {
        this.valid=true;
        this.inputValue=null;
        this.patternArray=[];
        let elem=this.template.querySelector('.'+this.inputFieldId);
        if(elem)
        {
            elem.setCustomValidity('');
            elem.reportValidity();
        }
        this.sendValue();
    }

    showToast(title,message,variant) {
        if (title && message && variant) {
            this.showToast = true;
            const evt = new ShowToastEvent({
                title: title,
                message: message,
                variant: variant,
            });
            this.dispatchEvent(evt);
        }
    }
    handleFocus(event)
    {
        this.sendEvent('focus',event);
    }
    @api setCustomValidity(msg)
    {
        let elem=this.template.querySelector('.'+this.inputFieldId);
        elem.setCustomValidity(msg);
        this.valid=!msg;

    }
    @api reportValidity()
    {
        return this.checkValidity(false,true);
    }
    @api showHelpMessageIfInvalid()
    {
        return this.checkValidity(false,true);

    }
    sendEvent(name,data)
    {
        const event = new CustomEvent(name, {
        detail: data});
        // Dispatches the event.
        this.dispatchEvent(event);
    }
}