var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var config = require('./helpers/desiredCapabilities').options;
var client = webdriverio.remote(config);
describe('1MD Testing', function () {

    before(function () {
        this.timeout(50000);
        return client.init();
    });

    // afterEach(function () {
    //     this.timeout(5000);
    //     return client.click();
    // });
});
//addition testing
describe("Test login with Facebook", function () {
    this.timeout(15000);
    it("login Using facebook", function(){
        return client.type('');
    });
    
    // it("test-two-positive-addition",function(){
    //    return client.click('android=new UiSelector().resourceId("com.candl.athena:id/digit5")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/plus")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/digit2")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
    //    .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
    //    .getText()
    //    .then(function (text){
    //        console.log("Text we've got from output: ",text);
    //        expect(text).to.equal('7');
    //     });
    // });
    // it("test-negative-positive-addition", function(){
    //    return client.click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/digit5")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/plus")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/digit2")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
    //    .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
    //    .getText()
    //    .then(function (text){
    //        console.log("Text we've got from output: ",text);
    //        expect(text).to.equal('-3');
    //     }); 
    // });
    // it("test-negative-addition", function(){
    //    return client.click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/digit5")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/plus")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/digit2")')
    //    .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
    //    .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
    //    .getText()
    //    .then(function (text){
    //        console.log("Text we've got from output: ",text);
    //        expect(text).to.equal('-7');
    //     }); 
    // });
});