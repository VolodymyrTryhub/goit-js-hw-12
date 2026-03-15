import{a as b,S as w,i}from"./assets/vendor-BkC4bTqC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const S="54965441-9d4dc4d4063faa3b07c399281",v="https://pixabay.com/api/";async function u(o,t){return(await b.get(v,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(s=>`
      <li class="gallery-item">
        <a href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}" />

          <div class="info">
            <p><b>Likes</b> ${s.likes}</p>
            <p><b>Views</b> ${s.views}</p>
            <p><b>Comments</b> ${s.comments}</p>
            <p><b>Downloads</b> ${s.downloads}</p>
          </div>
        </a>
      </li>
      `).join("");f.insertAdjacentHTML("beforeend",t),q.refresh()}function M(){f.innerHTML=""}function y(){m.classList.remove("is-hidden")}function g(){m.classList.add("is-hidden")}function $(){p.classList.remove("is-hidden")}function L(){p.classList.add("is-hidden")}const B=document.querySelector(".form"),O=document.querySelector(".load-more");let a="",n=1,l=0;B.addEventListener("submit",P);O.addEventListener("click",E);async function P(o){if(o.preventDefault(),a=o.target.elements.search.value.trim(),!!a){n=1,M(),L(),y();try{const t=await u(a,n);if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query."});return}l=t.totalHits,h(t.hits),l>15&&$()}catch{i.error({message:"Something went wrong!"})}finally{g()}}}async function E(){n+=1,y();try{const o=await u(a,n);h(o.hits);const t=Math.ceil(l/15);n>=t&&(L(),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch{i.error({message:"Something went wrong!"})}finally{g()}}
//# sourceMappingURL=index.js.map
