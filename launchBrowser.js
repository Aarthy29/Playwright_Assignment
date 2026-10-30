/*Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript*/

function launchBrowser(browserName)
{
    if(browserName === "chrome")
    {
        console.log("Entered browser name is"+browserName);
        
    }

    else
    {
        console.log("enter browser name is not chrome it is"+browserName);
        
  }
}

launchBrowser("chrome")
launchBrowser("Edge")

function testType(TestName)
{
 
    switch (TestName)
    {
        case "Smoke" :
            console.log("Test type:",TestName);
            break;

       case "sanity" :
            console.log("Test type:",TestName);
            break;

        case "Regression" :
            console.log("Test type:",TestName);
            break;
        default:
            console.log("Test type");
                break;
                
    }
}
testType("Sanity")
testType("Regression")
