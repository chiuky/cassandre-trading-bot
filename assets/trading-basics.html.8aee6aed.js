import{_ as r,r as o,o as i,c as l,b as t,a as n,F as c,e as s,d as e}from"./app.44944618.js";const d={},h=s('<h1 id="trading-basics" tabindex="-1"><a class="header-anchor" href="#trading-basics" aria-hidden="true">#</a> Trading basics</h1><h2 id="what-is-a-cryptocurrency" tabindex="-1"><a class="header-anchor" href="#what-is-a-cryptocurrency" aria-hidden="true">#</a> What is a cryptocurrency ?</h2><p>A cryptocurrency is a digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify assets&#39; transfer.</p><p>Cryptocurrencies use decentralized control as opposed to centralized digital currency and central banking systems.</p><p>Bitcoin is the first decentralized cryptocurrency. Since the release of bitcoin, over 6,000 other cryptocurrencies have been created.</p><h2 id="what-is-trading" tabindex="-1"><a class="header-anchor" href="#what-is-trading" aria-hidden="true">#</a> What is trading ?</h2><p>Trading means \u201Cexchanging one item for another\u201D. In the financial markets, it\u2019s buying shares, futures, options, swaps, bonds, etc..., or like in our case, an amount of cryptocurrency.</p><p>The idea here is to buy cryptocurrencies at a specific price and sell it at a higher price to make profits (even if you can still profit if the price goes down).</p><p>To make it simple, the value of an asset changes due to supply and demand: if many people want one bitcoin, the price will go up. If a lot of people want to sell one bitcoin, the price will go down.</p>',9),p=e("Nowadays, thanks to exchanges like "),u={href:"https://www.coinbase.com/",target:"_blank",rel:"noopener noreferrer"},f=e("Coinbase"),y=e(" or "),g={href:"https://www.kucoin.com/ucenter/signup?utm_source=Cassandre",target:"_blank",rel:"noopener noreferrer"},b=e("Kucoin"),m=e(", anyone can start trading using the tools provided by those platforms. They even offer API allowing you to create bots (with Cassandre, for example), which automatically do the trading for you based on the rules you choose."),_=t("h2",{id:"what-is-an-exchange",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#what-is-an-exchange","aria-hidden":"true"},"#"),e(" What is an exchange ?")],-1),k={href:"https://coinmarketcap.com/rankings/exchanges/",target:"_blank",rel:"noopener noreferrer"},x=e("Cryptocurrency exchanges"),w=e(" like "),v={href:"https://www.kucoin.com/ucenter/signup?utm_source=Cassandre",target:"_blank",rel:"noopener noreferrer"},q=e("Coinbase"),T=e(" or "),A={href:"https://www.kucoin.com/ucenter/signup?utm_source=Cassandre",target:"_blank",rel:"noopener noreferrer"},C=e("Kucoin"),z=e(" are online platforms where you can exchange an asset for another one based on the market value."),I=t("p",null,"To make it simple, after creating an account, the exchange will allow you to buy an amount of a cryptocurrency in exchange for your euros/dollars (they usually take a fee for that). Be careful; in reality, you don\u2019t really \u201Cown\u201D the cryptocurrency you will buy there: if you don\u2019t own the private key, you have a \u201Cpromise\u201D that an exchange owes you some assets.",-1),B=e("Most exchanges also offer tools for trading cryptocurrency. For example, Coinbase provides "),F={href:"https://pro.coinbase.com/",target:"_blank",rel:"noopener noreferrer"},V=e("this tool"),E=e("."),R=e("More interesting in our case, most exchanges offer API for trading like the "),W={href:"https://developers.coinbase.com/",target:"_blank",rel:"noopener noreferrer"},j=e("coinbase API"),S=e(". Instead of spending hours trading in front of your computer, you can write a program that trades for you. That\u2019s the goal of our bot."),K=e("One last point, some exchanges offer a sandbox that allows you to trade on the \u201Csimulated platform\u201D with fake assets. For example, "),N={href:"https://sandbox.kucoin.com/",target:"_blank",rel:"noopener noreferrer"},P=e("Kucoin"),L=e("."),H=s('<h2 id="what-is-an-account" tabindex="-1"><a class="header-anchor" href="#what-is-an-account" aria-hidden="true">#</a> What is an account ?</h2><p>Usually, in an exchange, you can have several accounts with different usages (Classical, trading, margin trading, future\u2026), and then you have a balance for each currency.</p><p>A balance is not merely the amount you have; it could be more complicated and can have the following values :</p><table><thead><tr><th style="text-align:left;">Field</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">currency</td><td style="text-align:left;">Currency</td></tr><tr><td style="text-align:left;">total</td><td style="text-align:left;">Returns the total amount of the currency in this balance</td></tr><tr><td style="text-align:left;">available</td><td style="text-align:left;">Returns the amount of the currency in this balance that is available to trade</td></tr><tr><td style="text-align:left;">frozen</td><td style="text-align:left;">Returns the frozen amount of the currency in this balance that is locked in a trading</td></tr><tr><td style="text-align:left;">loaned</td><td style="text-align:left;">Returns the loaned amount of the total currency in this balance that will be returned</td></tr><tr><td style="text-align:left;">borrowed</td><td style="text-align:left;">Returns the borrowed amount of the available currency in this balance that must be repaid</td></tr><tr><td style="text-align:left;">withdrawing</td><td style="text-align:left;">Returns the amount of the currency in this balance that is locked in withdrawal</td></tr><tr><td style="text-align:left;">depositing</td><td style="text-align:left;">Returns the amount of the currency in this balance that is locked in deposit</td></tr></tbody></table><h2 id="what-is-a-ticker" tabindex="-1"><a class="header-anchor" href="#what-is-a-ticker" aria-hidden="true">#</a> What is a ticker ?</h2><p>A ticker, a synonym for a stock symbol, is the short form of full security (asset). A ticker has a stream of quotes (AKA prices) attached to it, continuously updated throughout a trading session by the various exchanges.</p>',6),M=e("For example, take "),O=t("code",null,"ETH-BTC",-1),D=e(" , if you have "),Q={href:"https://curl.haxx.se/",target:"_blank",rel:"noopener noreferrer"},U=e("curl"),$=e(" and "),G={href:"https://stedolan.github.io/jq/",target:"_blank",rel:"noopener noreferrer"},J=e("jq"),X=e(" installed, you can get a ticker from Kucoin with this command"),Y=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -s https://api.kucoin.com/api/v1/market/orderbook/level1?symbol<span class="token operator">=</span>ETH-BTC <span class="token punctuation">\\</span>
<span class="token operator">|</span> jq .data
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The result will look like this :</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">1597187421265</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sequence&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1594340550066&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.033131&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0013217&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bestBid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.03313&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bestBidSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.1812529&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bestAsk&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.033131&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bestAskSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.8001025&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>The first listed currency of a currency pair is called the base currency (ETH), and the second currency is called the quote currency. A price at 0.033131 means 1 Ether can be bought with 0.033131 Bitcoin.</p><p>These are the fields you can find on a ticker quote:</p><table><thead><tr><th style="text-align:left;">Field</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">currencyPair</td><td style="text-align:left;">Currency pair</td></tr><tr><td style="text-align:left;">open</td><td style="text-align:left;">The opening price is the first trade price that was recorded during the day\u2019s trading.</td></tr><tr><td style="text-align:left;">last</td><td style="text-align:left;">Last trade field is the price at which the last trade was executed.</td></tr><tr><td style="text-align:left;">bid</td><td style="text-align:left;">The bid price shown represents the highest price.</td></tr><tr><td style="text-align:left;">ask</td><td style="text-align:left;">The ask price shown represents the lowest price.</td></tr><tr><td style="text-align:left;">high</td><td style="text-align:left;">The day\u2019s high price.</td></tr><tr><td style="text-align:left;">low</td><td style="text-align:left;">The day\u2019s low price.</td></tr><tr><td style="text-align:left;">vwap</td><td style="text-align:left;">Volume-weighted average price (VWAP) is the ratio of the value traded to total volume traded over a particular time horizon (usually one day).</td></tr><tr><td style="text-align:left;">volume</td><td style="text-align:left;">Volume is the number of shares or contracts traded.</td></tr><tr><td style="text-align:left;">quoteVolume</td><td style="text-align:left;">Quote volume</td></tr><tr><td style="text-align:left;">bidSize</td><td style="text-align:left;">The bid size represents the quantity of a security that investors are willing to purchase at a specified bid price.</td></tr><tr><td style="text-align:left;">askSize</td><td style="text-align:left;">The ask size represents the quantity of a security that investors are willing to sell at a specified selling price.</td></tr><tr><td style="text-align:left;">timestamp</td><td style="text-align:left;">The moment at which the account information was retrieved.</td></tr></tbody></table><h2 id="what-is-an-order" tabindex="-1"><a class="header-anchor" href="#what-is-an-order" aria-hidden="true">#</a> What is an order ?</h2><p>An order is an instruction to the exchange to purchase or sell an asset for you.</p><h3 id="market-orders" tabindex="-1"><a class="header-anchor" href="#market-orders" aria-hidden="true">#</a> Market Orders</h3><p>A market order is an order to buy or sell a specified quantity of the underlying security immediately. If you buy an asset, you will pay the price or higher than the ask price in the ticker. If you are going to sell an asset, you will receive an amount at or lower than the bid price in the ticker.</p><h3 id="limit-orders" tabindex="-1"><a class="header-anchor" href="#limit-orders" aria-hidden="true">#</a> Limit Orders</h3><p>A limit order, sometimes referred to as a pending order, allows you to buy and sell assets at a specific price in the future.</p><p>This type of order is used to execute a trade if the price reaches the price you decided. The order will not be filled if the price does not reach this level. In effect, a limit order sets the maximum or minimum price you are willing to buy or sell.</p><p>For example, you can create an order saying, \u201CI want to buy one bitcoin when it reaches 4,000$\u201D.</p>`,14);function Z(ee,te){const a=o("ExternalLinkIcon");return i(),l(c,null,[h,t("p",null,[p,t("a",u,[f,n(a)]),y,t("a",g,[b,n(a)]),m]),_,t("p",null,[t("a",k,[x,n(a)]),w,t("a",v,[q,n(a)]),T,t("a",A,[C,n(a)]),z]),I,t("p",null,[B,t("a",F,[V,n(a)]),E]),t("p",null,[R,t("a",W,[j,n(a)]),S]),t("p",null,[K,t("a",N,[P,n(a)]),L]),H,t("p",null,[M,O,D,t("a",Q,[U,n(a)]),$,t("a",G,[J,n(a)]),X]),Y],64)}var ne=r(d,[["render",Z],["__file","trading-basics.html.vue"]]);export{ne as default};
