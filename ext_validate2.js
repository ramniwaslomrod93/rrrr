ext-validate2.js
function validate()
        {
        
        if (document.getElementById("user").value == "") {
            alert("please enter name");
            
            document.getElementById("user").focus();
            return false;
        }


        if (document.getElementById("age").value == "") {
            alert("please enter age");
            document.getElementById("age").focus();
            return false;
        }
        else
        {
        var str;
        str=document.getElementById("age").value;
        if(isNaN(str))
            {
            alert("Please enter number ");
            document.getElementById("age").focus();
            return false;
        }
            
            /*
            var str,p,i,len,digit,ch;
            digit="0123456789";
            
            len=str.length;

            for(i=1;i<len;i++)
            {
                ch=str.charAt(i);
                p=digit.indexOf(ch);
                if(p<0)
                {
                    alert("Please enter numeric value");
                    return false;
                    break;
                }
            }
            */
            }

    if (document.getElementById("pass").value == "") {
            alert("please enter password");
            document.getElementById("pass").focus();
            return false;
        }
    
    var strPass;
    strPass=document.getElementById("pass").value;
    
    if(strPass.length<6)
    {
        alert("password must has minimum length of 6 char");
        document.getElementById("pass").focus();
        return false;
    }

    
    if (document.getElementById("add1").value == "") {
            alert("please enter Address");
            document.getElementById("add1").focus();
            return false;
        }

        if (document.getElementById("email").value == "") 
        {
                alert("please enter Email");
                document.getElementById("email").focus();
                return false;
            }
        else
        {
            var str1,p;
            str1=document.getElementById("email").value;
            p=str1.indexOf('@');
            if(p<0)
            {
                alert("Please enter Valid Email");
                document.getElementById("email").focus();
                return false;
            }
        }
        
    if (document.getElementById("city").value == "na") {
            alert("please select city");
            document.getElementById("city").focus();
            return false;
        }


    
    
    //Chk Radio gender
    
        var radios = document.getElementsByName("gender");
        var chkr = false;

        for(i=0; i < radios.length;i++)
        {
            if (radios[i].checked)
            {
                chkr = true;
                break;
            }     
        }
        if (chkr==false)
        {
            alert("Must check some radio option!");
            return false;
        }

    //Chk Terms
    if(!document.getElementById("checkbox").checked)
        {
            alert('You must agree to the terms first.');
            return false;
        }
    return true;
}