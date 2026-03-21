import{a as v,S,i as a}from"./assets/vendor-BkC4bTqC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const P="54965441-9d4dc4d4063faa3b07c399281",q="https://pixabay.com/api/";async function f(s,t){return(await v.get(q,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more"),M=new S(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const t=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />

          <div class="info">
            <p><b>Likes</b> ${r.likes}</p>
            <p><b>Views</b> ${r.views}</p>
            <p><b>Comments</b> ${r.comments}</p>
            <p><b>Downloads</b> ${r.downloads}</p>
          </div>
        </a>
      </li>
      `).join("");m.insertAdjacentHTML("beforeend",t),M.refresh()}function B(){m.innerHTML=""}function p(){h.classList.remove("is-hidden")}function b(){h.classList.add("is-hidden")}function L(){y.classList.remove("is-hidden")}function l(){y.classList.add("is-hidden")}const $=document.querySelector(".form"),E=document.querySelector(".load-more");let i="",n=1,c=0;const w=15;$.addEventListener("submit",O);E.addEventListener("click",x);async function O(s){if(s.preventDefault(),i=s.target.elements["search-text"].value.trim(),!i){a.warning({message:"Please enter a search word!"});return}n=1,c=0,B(),l(),p();try{const t=await f(i,n);if(c=t.totalHits,t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t.hits),Math.ceil(c/w)===1?(l(),a.info({message:"We're sorry, but you've reached the end of search results."})):L()}catch{a.error({message:"Something went wrong. Please try again!"})}finally{b()}}async function x(){l(),n+=1,p();try{const s=await f(i,n);g(s.hits);const t=Math.ceil(c/w);n>=t?(l(),a.info({message:"We're sorry, but you've reached the end of search results."})):L();const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}catch{a.error({message:"Something went wrong! Please try again."})}finally{b()}}
//# sourceMappingURL=index.js.map
