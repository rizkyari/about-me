(this["webpackJsonpabout-me"]=this["webpackJsonpabout-me"]||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/profile.b13558ff.jpg"},16:function(e,a,t){e.exports=t(27)},21:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(14),l=t.n(i),s=(t(21),t(2)),c=t(3),o=t(5),m=t(4),d=t(6),u=t(15),g=t.n(u),h=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).sidebarData=e.sidebarData,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg text-light bg-dark fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:g.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},"Certifications")))))}}]),a}(n.Component),p=t(7),b=t(9),f=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).landingData=e.landingData,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,r.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",r.a.createElement("a",{href:"mailto:rizkyari4121@email.com"},this.landingData.email),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/file/d/1r21rjNlmy8eYrx9_utdfIQMYWvBRtq9A/view?usp=sharing",target:"_blank",download:"cv.pdf"},"Click to see my resume")),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin,target:"_blank"},r.a.createElement(p.a,{icon:b.d})),r.a.createElement("a",{href:this.landingData.github,target:"_blank"},r.a.createElement(p.a,{icon:b.b})),r.a.createElement("a",{href:this.landingData.facebook,target:"_blank"},r.a.createElement(p.a,{icon:b.a})),r.a.createElement("a",{href:this.landingData.instagram,target:"_blank"},r.a.createElement(p.a,{icon:b.c})))))}}]),a}(n.Component),E=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).experience=e.experience,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center border-bottom-dark-2",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.position),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).education=e.education,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),a}(n.Component),v=t(10),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).skills=e.skills,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},this.skills.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(p.a,{icon:v.b,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))})))))}}]),a}(n.Component),N=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).interests=e.interests,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),a}(n.Component),y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).awards=e.awards,t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Training & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("li",null,r.a.createElement(p.a,{icon:v.a,color:"#ffc107"}),r.a.createElement("span",{className:"ml-2"}," ",e.awardDetail," on "),r.a.createElement("span",{className:"ml-2"}," ",e.awardDate," ")),r.a.createElement("li",null,r.a.createElement("span",{className:"ml-2"}," - ",e.awardDesc," ")),r.a.createElement("li",null,r.a.createElement("a",{href:e.awardLink,target:"_blank"},"check my certificate here")))})))))}}]),a}(n.Component),D=t(8),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={landingData:D.landing,experience:D.experience,education:D.education,skills:D.skills,interests:D.interests,awards:D.awards},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(f,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(E,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(w,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(k,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(N,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(y,{awards:this.state.awards})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e){e.exports=JSON.parse('{"landing":{"firstName":"Rizky Ariananda","lastName":"Hartono","phoneNumber":"+62-81348620644","bio":"I am a person who like to learn something new and challenge myself. Recently, I just graduated from bootcamp at DumbWays. In there we learn to create a fully functional Mobile App. Even though I\'m still new in programming world, I\'m quite familiar with code and willing to learn more with enthusiasm.","email":"rizkyari4121@gmail.com","linkedin":"https://www.linkedin.com/in/rizkyarihar/","github":"https://github.com/rizkyari","facebook":"https://www.facebook.com/rizky.ariananda.7","instagram":"https://www.instagram.com/rizkyarihartono/"},"experience":[{"position":"Quality Control","organization":"PT Multibrata Anugerah Utama","aboutWork":"Control and the distribution of all the companies quality documentation, Perform all internal and external audits on behalf of the companies management, and Making sure that the building quality as good as company standard","fromDate":"2017","toDate":"2018"},{"position":"Document Control","organization":"PT Multibrata Anugerah Utama","aboutWork":"Handling the document control procedures and maintain quality records, and Make sure the information provided is accurate and up to date","fromDate":"2017","toDate":"2016"},{"position":"Internship","organization":"Axisjaya Construction Sdn. Bhd.","aboutWork":"Help Supervisor to check the progress of the building and create weekly report","fromDate":"September 2014","toDate":"November 2014"}],"education":[{"university":"Limkokwing University Of Creative Technology","degree":"Bachelor of Science in Construction Management","gpa":"GPA : 3.56","fromDate":"July 2012","toDate":"July 2015"},{"university":"Limkokwing University Of Creative Technology","degree":"Foundation In Built Environment","gpa":"GPA : 3","fromDate":"July 2011","toDate":"July 2012"},{"university":"SMA NEGERI 5 Balikpapan","degree":"Major In Science","gpa":"-","fromDate":"July 2010","toDate":"July 2012"}],"skills":[{"name":"HTML"},{"name":"CSS"},{"name":"Javascript"},{"name":"React"},{"name":"Nodejs"},{"name":"ExpressJS"},{"name":"MySQL"},{"name":"AutoCAD"}],"interests":{"paragraphOne":"Apart from coding and programming, I like to watch football and sometimes also play futsal with friends. Football is the people\'s game. As a spectacle it is more dramatic than the greatest action blockbuster, its more profound than high art and redolent with literal and symbolic meaning alike. To be around friends and playing something that you like. And to see a lot of people playing and supporting something I guess. Football brings people together. Thats what I like about football","paragraphTwo":"Beside football, I like to spend some my me-time with wander around the city or playing some games to relieve my stress. When you play a game that is well made and puts you in the zone it gives you a hit of dopamine which makes you happy."},"awards":[{"awardDetail":"DumbWays.ID","awardDate":"Oct - Nov 2019","awardDesc":"Bootcamp for 6 weeks to learn React Native"},{"awardDetail":"Brain O Meter","awardDate":"03 September 2019","awardDesc":"Learn how to make dynamic website","awardLink":"https://drive.google.com/file/d/1U8A2oKYJiNPVLeOMyfQpCDZx-w5uk3g5/view?usp=sharing"},{"awardDetail":"Dicoding Indonesia","awardDate":"21 August 2019","awardDesc":"Learn basic of web programming","awardLink":"https://drive.google.com/file/d/1kYK3mJ7jh_CmfZZfyZ3aSwz7XCdSK3fe/view?usp=sharing"},{"awardDetail":"Pintaar 101","awardDate":"16 August 2019","awardDesc":"Understanding PHP basic and fundamentals","awardLink":"https://drive.google.com/file/d/1msakGG6oHPrgt_cZ7K-bJgoz75NsOGYD/view?usp=sharing"},{"awardDetail":"Sololearn","awardDate":"August 2019","awardDesc":"Learn HTML & CSS fundamentals also Javascript","awardLink":"https://drive.google.com/file/d/1jobAwjMroRfa3FFLPTZXeeUEBpD0wDLS/view?usp=sharing"},{"awardDetail":"PIKMI Rajawali","awardDate":"April 2016","awardDesc":"AutoCAD 2d & 3d","awardLink":"https://drive.google.com/file/d/1AcJVwGGviajhw0LaY8_0NaFrY3rRWjQm/view?usp=sharing"},{"awardDetail":"Bina Nusantara (Binus)","awardDate":"15 April 2016","awardDesc":"Learn logical and visual programming of JAVA","awardLink":"https://drive.google.com/file/d/18KuC_KleKag2SzB1F_G7jQ8iehhqK3rY/view?usp=sharing"}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.4d12a218.chunk.js.map