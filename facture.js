function calculate(){
        var c= Number(document.getElementById("c").value);
        var b= Number(document.getElementById("b").value);
        var d=document.getElementById("d").value=(c*b);

        var f=Number(document.getElementById("f").value);
        var g=Number(document.getElementById("g").value);
        var h=document.getElementById("h").value=(f*g);

        var j=Number(document.getElementById("j").value);
        var k=Number(document.getElementById("k").value);
        var l=document.getElementById("l").value=(j*k);

        var n=Number(document.getElementById("n").value);
        var o=Number(document.getElementById("o").value);
        var p=document.getElementById("p").value=(o*n);

        var r=Number(document.getElementById("r").value);
        var s=Number(document.getElementById("s").value);
        var t=document.getElementById("t").value=(r*s);

        var v=Number(document.getElementById("v").value);
        var w=Number(document.getElementById("w").value);
        var x=document.getElementById("x").value=(v*w);

        var z=Number(document.getElementById("z").value);
        var A=Number(document.getElementById("A").value);
        var B=document.getElementById("B").value=(A*z);

        var D=Number(document.getElementById("D").value);
        var E=Number(document.getElementById("E").value);
        var F=document.getElementById("F").value=(D*E);

        var H=Number(document.getElementById("H").value);
        var I=Number(document.getElementById("I").value);
        var J=document.getElementById("J").value=(H*I);

        var L=Number(document.getElementById("L").value);
        var M=Number(document.getElementById("M").value);
        var N=document.getElementById("N").value=(L*M);

        var P=Number(document.getElementById("P").value);
        var Q=Number(document.getElementById("Q").value);
        var R=document.getElementById("R").value=(P*Q);

        
        var remise =Number(document.getElementById("remise").value);
        var ST= Number(document.getElementById("ST").value);

        document.getElementById("ST").value=(d+h+l+p+t+x+B+F+J+N+R);

        var STremise=Number(document.getElementById("STremise").value);

        document.getElementById("STremise").value=(STremise);

        var imposition=parseInt(document.getElementById("imposition").value+"%");
        var tt=parseInt(document.getElementById("tt").value);

        document.getElementById("tt").value=Math.round((ST*imposition)/100);

        var frais=Number(document.getElementById("frais").value);
        var solde=Number(document.getElementById("solde").value);

        document.getElementById("solde").value=(STremise+tt+frais);
        }

        function access(){
            var username=prompt("Identifiant :");
            var password=prompt("Mot de passe :");
        if (username==="Admin_GSB" && password==="admin"){
            document.location.href="pagelien.html";
        }
        else
            { alert("Identifiant ou mot de passe incorrects")}
        }