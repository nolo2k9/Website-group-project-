
// Klaudija
	function dropdown()
	{
		document.getElementById("myDropDwn").classList.toggle("show");
	}
	function addedFunct(){
		alert('Item added to cart');
	}
	//slideshow
	var index = 0;
	function carousel(){
		var i;
		var x = document.getElementsByClassName("slide");
		for(i=0;i<x.length;i++){
			x[i].style.display = "none";
		}
		index = Math.floor((Math.random() * 6) + 1);
		if(index>=x.length){
			index = 0;
		}
		x[index].style.display = "block";
	}
	//discount
	function popup(){
	alert('Use discount code TEN10 for 10% off at checkout');
}
	//***********************************CUANS SCRIPT!!!**********************************

	function whatever()
	{
		var passInput = document.getElementById("newPass");
		passInput.addEventListener("input", passwordStr);
		
		// JQuery Loggin -> Register
		$('.loginMessage a').click(function(){
		$('form').animate({height:"toggle", opacity: "toggle"}, "slow");
		});
	}

// Pre-coded users
	
	var existingUsers = 
	[
		{	
			firstname: "Gerry",
			lastname: "Agnew",
			username: "GerryA",
			passW: "password123",
			email: "gerry@gmit.ie",
			phone:"0833333333"
		},
		{
			firstname: "Sean",
			lastname: "Duignan",
			username: "SeanD",
			passW: "password456",
			email: "sean@gmit.ie",
			phone:"0822222222"
		},
		{
			firstname: "Michael",
			lastname: "Duignan",
			username: "MichaelD",
			passW: "password789",
			email: "michael@gmit.ie",
			phone:"0844444444"
		}
	]
	
//==================================================================================
	
// Validation error functions
	
	function registerValidate()
	{
		var valid = true;
		
		if(document.getElementById("newFName").value == "")
		{
			document.getElementById("reg-FName-error").innerHTML = "First Name required";
			valid = false;
		}
		else
		{
			document.getElementById("reg-FName-error").innerHTML = "";
		}
		
		if(document.getElementById("newLName").value == "")
		{
			document.getElementById("reg-LName-error").innerHTML = "Last Name required";
			valid = false;
		}
		else
		{
			document.getElementById("reg-LName-error").innerHTML = "";
		}
		
		if(document.getElementById("newUName").value == "")
		{
			document.getElementById("reg-UName-error").innerHTML = "Username required";
			valid = false;
		}
		else
		{
			document.getElementById("reg-UName-error").innerHTML = "";
		}
		
		if(document.getElementById("newUName").length < 8)
		{
			document.getElementById("reg-UName-error").innerHTML = "Username must be 8 characters or more";
			valid = false;
		}
		else
		{
			document.getElementById("reg-UName-error").innerHTML = "";
		}
		
		if(document.getElementById("newPass").value == "")
		{
			document.getElementById("reg-pass-error").innerHTML = "Password required";
			valid = false;
		}
		else
		{
			document.getElementById("reg-pass-error").innerHTML = "";
		}
		
		if(document.getElementById("newEmail").value == "")
		{
			document.getElementById("reg-email-error").innerHTML = "Email required";
			valid = false;
		}
		else
		{
			document.getElementById("reg-email-error").innerHTML = "";
		}
		
		if(document.getElementById("newPhone").value == "")
		{
			document.getElementById("reg-phone-error").innerHTML = "Phone number required";
			valid = false;
		}
		else
		{
			document.getElementById("reg-phone-error").innerHTML = "";
		}
		
		return valid;
	}
	
// end of register errors
	
//==================================================================================
	
// Login/Register Functions
	
	function loginUser()
	{
		var userCheck = false;
		var passCheck = false;
		
		var validLogin = true;
		
		var errorChoice = false;
		
			if(document.getElementById("username").value == "")
			{
				document.getElementById("login-user-error").innerHTML = "Username required";
				validLogin = false;
				errorChoice = true;
			}
			else
			{
				document.getElementById("login-user-error").innerHTML = "";
			}
			
			if(document.getElementById("passW").value == "")
			{
				document.getElementById("login-pass-error").innerHTML = "Password required";
				validLogin = false;
				errorChoice = true;
			}
			else
			{
				document.getElementById("login-pass-error").innerHTML = "";
			}
			
			if(errorChoice == true)
			{
				return validLogin;
			}
			else
			{
				for (i = 0; i < existingUsers.length; i++)
				{
					var username = document.getElementById("username").value;
					var passW = document.getElementById("passW").value;
					
					var validate = true;
					
					if(username != existingUsers[i].username && username != "")
					{
						document.getElementById("login-user-error").innerHTML = "Invalid, user does not exist";
						validate = false;
					}
					else
					{
						document.getElementById("login-user-error").innerHTML = "";
						userCheck = true;
					}
					
					if(passW != existingUsers[i].passW && passW != "")
					{
						document.getElementById("login-pass-error").innerHTML = "Error, incorrect Password";
						validate = false;
					}
					else
					{
						document.getElementById("login-pass-error").innerHTML = "";
						passCheck = true;
					}
					
					if(userCheck == true && passCheck == true)
					{
						localStorage.user = username;
						localStorage.pass = passW;
						alert("Welcome back " + username);
					}
					return validate;
				} // for 
				
			} // choice else
				
	} // end of function
	
	function logoutUser()
	{
		localStorage.removeItem("user");
		localStorage.removeItem("pass");
	}

	function registerUser()
	{
		if(!registerValidate())
		{
			alert("Please complete the flagged fields");
		}
		else
		{
			var registerFName = document.getElementById("newFName").value;
			var registerLName = document.getElementById("newLName").value;
			var registerUName = document.getElementById("newUName").value;
			var registerPass = document.getElementById("newPass").value;
			var registerEmail = document.getElementById("newEmail").value;
			var registerPhone = document.getElementById("newPhone").value;
			
			localStorage.regFname = registerFName;
			localStorage.regLname = registerLName;
			localStorage.regUname = registerUName;
			localStorage.regPass = registerPass;
			localStorage.regMail = registerEmail;
			localStorage.regPhone = registerPhone;
			
			var newUser =
			{
				firstname: registerFName,
				lastname: registerLName,
				username: registerUName,
				passW: registerPass,
				email: registerEmail,
				phone: registerPhone
			}
			
			for(i = 0; i < existingUsers.length; i++)
			{
				
				if(registerUName == existingUsers[i].username)
				{
					document.getElementById("reg-UName-error").innerHTML = "Username already exists";
					return false;
				}
				
				if(registerEmail == existingUsers[i].email)
				{
					document.getElementById("reg-email-error").innerHTML = "Email already exists";
					return false;
				}
			
			} // for
			
		existingUsers.push(newUser);
		
		}// else
			
	} 
	
//================================================================================

// Password Strength function
	
	function passwordStr()
	{
		var passValue = document.getElementById("newPass").value;
		
		if(passValue.length >= 8 && passValue.length <= 10)
		{
			document.getElementById("passStrength").innerHTML = "Weak";
		}
		else if(passValue.length > 10 && passValue.length <= 16)
		{
			document.getElementById("passStrength").innerHTML = "Average";
			document.getElementById("passStrength").style.color = "yellow";
		}
		else if(passValue.length > 16)
		{
			document.getElementById("passStrength").innerHTML = "Strong";
			document.getElementById("passStrength").style.color = "green";
		}
		else
		{
			document.getElementById("passStrength").style.color = "red";
		}
	}
	
	function checkoutForm()
	{
		if(document.getElementById("disc").value == "TEN10")
		{
			alert("Purchase Complete with 10% discount");
		}
		else
		{
			alert("Purchase Complete");
		}
		
	}
	
// *************************************END OF CUANS CODE**************************


// ************************************* Keiths Code ******************************
		function checkCart()
		{
            if (cart == null)
			{
                cart = new Array();
            }
        }

		$(".add-to-cart").click(function(event)
		{
			event.preventDefault();//prevents links from doing default behavior
			var name = $(this).attr("data-name"); //gets the data name from the link clicked.
			var price = Number($(this).attr("data-price"));

			addItemToCart(name, price, 1);
			displayCart();	
		});
		
		$("#Clear-cart").click(function(event)
		{
			emptyCart ();
			displayCart();
		});
		
		$("#Show-cart").on("click",".delete-all", function(event)
		{
			var name = $(this).attr("data-name");
			removeItemAltogether(name);
			displayCart();
		}); 
		
		$("#Show-cart").on("click",".subtract-item", function(event)
		{
			var name = $(this).attr("data-name");
			removeItemFromCart(name);
			displayCart();
		}); 
		
		$("#Show-cart").on("click",".add-1-item", function(event)
		{
			var name = $ (this).attr("data-name");
			addItemToCart(name, 0, 1);
			displayCart();
		});
		
        function displayCart()
		{
            var cartArray = listCart();
            var output = "";
            for (var i in cartArray)
			{
                output += "<li>"
                    + cartArray[i].name
                    + " "+ cartArray[i].count
                    +"<button class = 'add-1-item' data-name='" +cartArray[i].name+"'>+</button>"
                    +"<button class = 'delete-all' data-name='" +cartArray[i].name+"'>X</button>"
                    +"<button class ='subtract-item' data-name='" +cartArray[i].name+"'>-</button>"
					+"</li>";
                
            }
			$("#Show-cart").html(output); // this replaces the inner html of the element " Show Cart"
			$("#total-cart").html(totalCart());
        }

        // ********************************************
        // Shopping Cart Functions 
        //array
        var cart = [];
        //object
        var Item = function (name, price, count)
        {
            this.name = name
            this.price = price
            this.count = count
        };
        
        function addItemToCart (name, price, count)
		{
            for (var i in cart){
                if (cart[i].name === name){
                    cart[i].count +=count;
                    saveCart();
                    return;
                    
                }
            }
            var item = new Item(name, price, count);
            cart.push(item);
            saveCart();
        }

        function removeItemFromCart(name)
		{
            for (var i in cart){
                if (cart[i].name === name){
                    cart [i].count --;
                    
                    if (cart[i].count <=0)
                    {
                        cart.splice(i, 1);
                        //cart[i].count =0;
                    }
                    break;
                    
                    } 
            }
            saveCart();
        }
        
        function removeItemAltogether (name)
        {
            for (var i in cart ) {
                if (cart[i].name === name){
                    cart.splice(i, 1);
                    break;
                }
            }
            saveCart();
        }

        function emptyCart ()
		{
            cart = [];
            saveCart()
        }

        function countCart()
		{
            var total = 0; 
            for (var i in cart ){
                total += cart[i].count;
                
            }
            return total;
 
        }
        
        function totalCart ()
		{
            var totalCost = 0;
            for (var i in cart ){
                totalCost += cart[i].price * cart[i].count;
            }
            return totalCost.toFixed(2);
        }
        
        function listCart()
		{
           var cartCopy = [];
           
           for (var i in cart){
               var item = cart[i];
               var itemCopy = {};
               for (var p in item) {
                   itemCopy[p] = item[p];
               }
               cartCopy.push (itemCopy);
               }
           return cartCopy;
        }
		
        function saveCart()
		{
            localStorage.setItem("shoppingCart", JSON.stringify(cart));
        }
        
        function loadCart()
		{
            cart = JSON.parse(localStorage.getItem("shoppingCart"));
        }
        
        loadCart();
        saveCart();
        displayCart();