(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3849],{1641:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(22122),o=a(19756),r=(a(15007),a(64983)),i=a(99536),m=["components"],l={},d={_frontmatter:l},p=i.Z;function s(e){var t=e.components,a=(0,o.Z)(e,m);return(0,r.mdx)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"getting-started-with-the-cja-api"},"Getting started with the CJA API"),(0,r.mdx)("p",null,"There are several steps to take before using the CJA APIs."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Permissions"),": Configure permissions for the developer in the Adobe Admin Console."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"API Client"),": Create a client configuration in the Adobe Developer Console."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Authentication"),": Obtain the necessary credentials to send data to Adobe.")),(0,r.mdx)("h2",{id:"permissions"},"Permissions"),(0,r.mdx)("p",null,"Before starting to use the CJA API, you must make sure that your account has the correct permissions to send requests. Even if you successfully authenticate with an Adobe ID, you cannot make requests to Adobe unless your account contains the correct organization permissions."),(0,r.mdx)("p",null,"Give a developer correct API permissions as a product profile admin:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Navigate to ",(0,r.mdx)("a",{parentName:"li",href:"https://adminconsole.adobe.com"},"adminconsole.adobe.com"),"."),(0,r.mdx)("li",{parentName:"ol"},"Check the organization name in the top right to make sure that you are logged in to the correct company."),(0,r.mdx)("li",{parentName:"ol"},"Click ",(0,r.mdx)("strong",{parentName:"li"},"Products"),", then click ",(0,r.mdx)("strong",{parentName:"li"},"Customer Journey Analytics"),"."),(0,r.mdx)("li",{parentName:"ol"},"Select the desired product profile, or create a new product profile."),(0,r.mdx)("li",{parentName:"ol"},"Under the Permissions tab, assign the desired permissions to the product profile."),(0,r.mdx)("li",{parentName:"ol"},"Once the desired permissions are set, click the Developers tab."),(0,r.mdx)("li",{parentName:"ol"},"Click ",(0,r.mdx)("strong",{parentName:"li"},"Add Developer"),", and enter the desired user's name or email address."),(0,r.mdx)("li",{parentName:"ol"},"Click ",(0,r.mdx)("strong",{parentName:"li"},"Save"),".")),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"https://helpx.adobe.com/enterprise/using/manage-developers.html"},"Managing developers")," in the Enterprise Admin user guide for more information."),(0,r.mdx)("h2",{id:"api-client"},"API Client"),(0,r.mdx)("p",null,"Once you are a developer for a CJA product profile, you can create an API client in the Adobe Developer Console."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Navigate to ",(0,r.mdx)("a",{parentName:"p",href:"https://console.adobe.io"},"console.adobe.io"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Check the organization name in the top right to make sure that you are logged in to the correct company.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("strong",{parentName:"p"},"Create new project"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("strong",{parentName:"p"},"Add API"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("strong",{parentName:"p"},"Customer Journey Analytics"),", then click ",(0,r.mdx)("strong",{parentName:"p"},"Next"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("strong",{parentName:"p"},"Generate Keypair"),"."),(0,r.mdx)("p",{parentName:"li"},"A ",(0,r.mdx)("inlineCode",{parentName:"p"},"config.zip")," file is automatically downloaded to your local machine. Keep this config folder in a secure location, as it contains your only copy of your private key. See ",(0,r.mdx)("a",{parentName:"p",href:"https://www.adobe.io/authentication/auth-methods.html#!AdobeDocs/adobeio-auth/master/JWT/JWTCertificate.md"},"JSON web token")," in the Adobe Developer Authentication user guide for more information.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("strong",{parentName:"p"},"Next"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Select the desired product profiles for the service account. Make sure that it contains the right permissions to access the API. Click ",(0,r.mdx)("strong",{parentName:"p"},"Save configured API"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Back on the project's home page, click ",(0,r.mdx)("strong",{parentName:"p"},"Add to project")," > ",(0,r.mdx)("strong",{parentName:"p"},"API"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("strong",{parentName:"p"},"Adobe Experience Platform"),", then click ",(0,r.mdx)("strong",{parentName:"p"},"Next"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"You already generated a keypair when creating the Adobe Analytics API, so you do not need to create another. Click ",(0,r.mdx)("strong",{parentName:"p"},"Next"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Select the desired product profiles for the service account. Make sure that it contains the right permissions to access the API. Click ",(0,r.mdx)("strong",{parentName:"p"},"Save configured API"),"."))),(0,r.mdx)("h2",{id:"generate-a-jwt-token-and-make-an-api-call-using-the-command-line"},"Generate a JWT token and make an API call using the command line"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Back on the project's home page, click ",(0,r.mdx)("strong",{parentName:"li"},"Service Account (JWT)")," on the left, then click the ",(0,r.mdx)("strong",{parentName:"li"},"Generate JWT")," tab."),(0,r.mdx)("li",{parentName:"ol"},"Open your ",(0,r.mdx)("inlineCode",{parentName:"li"},"config.zip")," file and locate your private key. Paste the private key in the Generate custom JWT field."),(0,r.mdx)("li",{parentName:"ol"},"Click ",(0,r.mdx)("strong",{parentName:"li"},"Generate Token"),"."),(0,r.mdx)("li",{parentName:"ol"},"Copy the sample cURL command to your clipboard."),(0,r.mdx)("li",{parentName:"ol"},"Open your operating system's Command Prompt or Terminal, then paste and execute the cURL command."),(0,r.mdx)("li",{parentName:"ol"},"Adobe's servers provide a response that includes an ",(0,r.mdx)("inlineCode",{parentName:"li"},"access_token"),". Copy this token to your clipboard.")),(0,r.mdx)("p",null,"You now have everything you need to start making API calls using the platform of your choice. See ",(0,r.mdx)("a",{parentName:"p",href:"../use-cases/index.md"},"Use cases")," for examples on how to make API calls on different platforms."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-md-1d8019a12e4ae35c9a61.js.map