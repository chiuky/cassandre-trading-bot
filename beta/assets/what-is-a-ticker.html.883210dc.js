import{_ as a,r as o,o as i,c as r,b as t,a as n,F as l,d as e,e as p}from"./app.d246f12a.js";const d={},c=t("h1",{id:"qu-est-ce-qu-un-ticker",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#qu-est-ce-qu-un-ticker","aria-hidden":"true"},"#"),e(" Qu'est-ce qu'un ticker ?")],-1),u=t("p",null,"Un ticker, synonyme de symbole boursier, est la forme abr\xE9g\xE9e d'un actif. Ses informations sont mises \xE0 jour en continu tout au long d'une s\xE9ance de n\xE9gociation par les diff\xE9rentes bourses.",-1),h=e("Par exemple, prenez "),g=t("code",null,"ETH-BTC",-1),k=e(", si vous avez install\xE9 les outils "),v={href:"https://curl.haxx.se/",target:"_blank",rel:"noopener noreferrer"},f=e("curl"),m=e(" et "),y={href:"https://stedolan.github.io/jq/",target:"_blank",rel:"noopener noreferrer"},b=e("jq"),q=e(", vous pouvez obtenir un ticker de Kucoin avec cette commande:"),x=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -s https://api.kucoin.com/api/v1/market/orderbook/level1?symbol<span class="token operator">=</span>ETH-BTC <span class="token operator">|</span> jq .data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result will look like this :</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">1597187421265</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1594340550066&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.033131&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0013217&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bestBid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.03313&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bestBidSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.1812529&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bestAsk&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.033131&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bestAskSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.8001025&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>La premi\xE8re devise r\xE9pertori\xE9e d&#39;une paire de devises est appel\xE9e devise de base (ETH) et la deuxi\xE8me devise est appel\xE9e devise de cotation (BTC). Un prix \xE0 0,033131 signifie que 1 Ether peut \xEAtre achet\xE9 avec 0,033131 Bitcoin.</p><p>Voici les champs que vous pouvez trouver sur un ticker :</p><table><thead><tr><th style="text-align:left;">Field</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">currencyPair</td><td style="text-align:left;">Currency pair (ETH-BTC for example)</td></tr><tr><td style="text-align:left;">open</td><td style="text-align:left;">The opening price is the first trade price that was recorded during the day\u2019s trading</td></tr><tr><td style="text-align:left;">last</td><td style="text-align:left;">Last trade field is the price at which the last trade was executed</td></tr><tr><td style="text-align:left;">bid</td><td style="text-align:left;">The bid price shown represents the highest price</td></tr><tr><td style="text-align:left;">ask</td><td style="text-align:left;">The ask price shown represents the lowest price</td></tr><tr><td style="text-align:left;">high</td><td style="text-align:left;">The day\u2019s high price</td></tr><tr><td style="text-align:left;">low</td><td style="text-align:left;">The day\u2019s low price</td></tr><tr><td style="text-align:left;">vwap</td><td style="text-align:left;">Volume-weighted average price (VWAP) is the ratio of the value traded to total volume traded over a particular time horizon (usually one day)</td></tr><tr><td style="text-align:left;">volume</td><td style="text-align:left;">Volume is the number of shares or contracts traded</td></tr><tr><td style="text-align:left;">quoteVolume</td><td style="text-align:left;">Quote volume</td></tr><tr><td style="text-align:left;">bidSize</td><td style="text-align:left;">The bid size represents the quantity of a security that investors are willing to purchase at a specified bid price</td></tr><tr><td style="text-align:left;">askSize</td><td style="text-align:left;">The ask size represents the quantity of a security that investors are willing to sell at a specified selling price</td></tr><tr><td style="text-align:left;">timestamp</td><td style="text-align:left;">The moment at which the account information was retrieved</td></tr></tbody></table>`,6);function _(T,w){const s=o("ExternalLinkIcon");return i(),r(l,null,[c,u,t("p",null,[h,g,k,t("a",v,[f,n(s)]),m,t("a",y,[b,n(s)]),q]),x],64)}var B=a(d,[["render",_],["__file","what-is-a-ticker.html.vue"]]);export{B as default};
