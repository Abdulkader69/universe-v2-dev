import{j as s,R as l}from"./vendor.d5b802df.js";const d=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};d();const t=s.exports.jsx,a=s.exports.jsxs,u=s.exports.Fragment;function f(){return t("div",{className:"App",children:t("h1",{className:"text-4xl px-14 py-12 bg-gray-700 m-4",children:"Universe v2"})})}function p(){return a("div",{className:"App",children:[t(f,{}),t("h1",{className:"text-4xl px-14 py-12 bg-gray-700 m-4",children:"React App"})]})}l.render(t(u,{children:t(p,{})}),document.getElementById("root"));
