(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),c=i.n(a),n=(i(14),i(8)),s=i(2),r=i(1),l=(i(15),i(9)),o=(i(16),i(17),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,c=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:a,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:c,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(j,Object(l.a)({},e),e.imdbId)}))})},m=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,b=function(e){var t=e.onAdd,i=Object(r.useState)(""),a=Object(s.a)(i,2),c=a[0],n=a[1],l=Object(r.useState)(""),j=Object(s.a)(l,2),d=j[0],b=j[1],h=Object(r.useState)(""),u=Object(s.a)(h,2),O=u[0],g=u[1],p=Object(r.useState)(""),x=Object(s.a)(p,2),v=x[0],f=x[1],w=Object(r.useState)(""),M=Object(s.a)(w,2),y=M[0],N=M[1],T=Object(r.useState)(!1),U=Object(s.a)(T,2),_=U[0],B=U[1],S=Object(r.useState)(!1),k=Object(s.a)(S,2),z=k[0],A=k[1],I=Object(r.useState)(!1),D=Object(s.a)(I,2),V=D[0],Y=D[1],C=function(e,t){t(e)},Z=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach((function(e){e("")}))};return Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!c.length||!d.length||!m.test(O))return c.length||A(!0),d.length||Y(!0),void(m.test(O)||(B(!0),Z(g)));t({title:c,description:d,imgUrl:O,imdbUrl:v,imdbId:y}),Z(n,b,g,f,N)},children:["Title",Object(o.jsx)("br",{}),Object(o.jsx)("input",{value:c,type:"text",onChange:function(e){var t=e.target;C(t.value,n),A(!1)}}),Object(o.jsx)("br",{}),z&&Object(o.jsx)("p",{style:{color:"red"},children:Object(o.jsx)("b",{children:"Type Something!!!"})}),"Description",Object(o.jsx)("br",{}),Object(o.jsx)("input",{value:d,type:"text",onChange:function(e){var t=e.target;C(t.value,b),Y(!1)}}),Object(o.jsx)("br",{}),V&&Object(o.jsx)("p",{style:{color:"red"},children:Object(o.jsx)("b",{children:"Type Something!!!"})}),"imgUrl",Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",value:O,onChange:function(e){var t=e.target;C(t.value,g),B(!1)}}),Object(o.jsx)("br",{}),_&&Object(o.jsx)("p",{style:{color:"red"},children:Object(o.jsx)("b",{children:"Wrong URL!!!"})}),"imdbUrl",Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",value:v,onChange:function(e){var t=e.target;return C(t.value,f)}}),Object(o.jsx)("br",{}),"imdbId",Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",value:y,onChange:function(e){var t=e.target;return C(t.value,N)}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",children:"ADD"})]})},h=i(7),u=function(){var e=Object(r.useState)(h),t=Object(s.a)(e,2),i=t[0],a=t[1],c=Object(r.useCallback)((function(e){a((function(t){return[].concat(Object(n.a)(t),[e])}))}),[]);return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(b,{onAdd:c})})]})};c.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.7f6f103a.chunk.js.map